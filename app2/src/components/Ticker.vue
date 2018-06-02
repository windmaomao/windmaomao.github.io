<template>
  <div id="ticker">
    <small>Monthly:</small>
    <span class="tag is-light"
      v-bind:key="ticker.tick" v-for="ticker in orderBy(tickers, 'tick')"
      v-bind:title="ticker.price | currency"
    >
      <strong>{{ ticker.tick | pad }}:</strong> &nbsp;
      <span>{{ ticker.gain | percentage }}</span>
    </span>
  </div>
</template>

<script>
import { Observable, from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

export default {
  name: 'Ticker',
  props: {},
  data: () => ({
    freqency: 'daily',
    tickers: []
  }),
  filters: {
    pad: (value) => {
      return ('     ' + value).slice(-5)
    },
    percentage: (value) => {
      const n = (value * 100).toFixed(1)
      if (n > 0) {
        return '+' + n + '%'
      } else {
        return n + '%'
      }
    }
  },
  subscriptions() {
    const type = {
      daily: 'TIME_SERIES_DAILY',
      monthly: 'TIME_SERIES_MONTHLY_ADJUSTED'
    }
    const list = ['TSLA', 'TIF', 'GLD', 'ADSK', 'GE', 'SPY', 'DB', 'UUP', 'SHLD']
    const fn = `https://www.alphavantage.co/query`
    const params = (func, tick) => {
      return {
        params: {
          function: func,
          symbol: tick,
          interval: '60min',
          outputsize: 'compact',
          apikey: 'T0M13EE9U7PHS2B4'
        }
      }
    }
    const parseData = (tick, res) => {
      const data = Object.values(res.body)
      const series = Object.values(data[1])
      const prices = Object.values(series[0])
      const price = prices[3]
      const prevs = Object.values(series[1])
      const prev = prevs[3]
      const gain = calcGain(price, prev)
      return { tick, price, prev, gain }
    }
    const calcGain = (price, prev) => {
      if (prev) {
        return (price - prev) / prev
      } else {
        return 0.0
      }
    }
    const freq$ = (tick, func) => {
      return from(this.$http.get(fn, params(func, tick))).pipe(
        map(res => parseData(tick, res))
      )
    }

    return {
      msg: new Observable(ob => {
        ob.next(1)
        ob.complete()
      }),
      daily: from(list).pipe(
        mergeMap(tick => freq$(tick, type.daily))
      ),
      monthly: from(list).pipe(
        mergeMap(tick => freq$(tick, type.monthly))
      )
    }
  },
  created() {
    this.$observables.monthly.subscribe(ticker => {
      this.tickers.push(ticker)
    })
  }
}
</script>
