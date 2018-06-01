<script>
import { Observable, from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

export default {
  name: 'Ticker',
  props: {},
  data: () => ({
    tickers: []
  }),
  subscriptions() {
    const list = ['TSLA', 'FB']
    const stock$ = (tick) => {
      const fn = `https://www.alphavantage.co/query`
      const p = {
        function: 'TIME_SERIES_DAILY',
        symbol: tick,
        interval: '60min',
        outputsize: 'compact',
        apikey: 'T0M13EE9U7PHS2B4'
      }

      return from(this.$http.get(fn, { params: p })).pipe(
        map(res => {
          const data = Object.values(res.body)
          const series = Object.values(data[1])
          const prices = Object.values(series[0])
          const price = prices[3]
          return { tick, price }
        })
      )
    }

    return {
      msg: new Observable(ob => {
        ob.next(1)
        ob.complete()
      }),
      watchlist: from(list).pipe(
        mergeMap(tick => stock$(tick))
      )
    }
  },
  render() {
    const watcher = this.tickers.map(ticker => {
      return (
        <li>{ ticker.tick }: { ticker.price }</li>
      )
    })

    return (
      <div id="ticker" style="position:fixed;bottom:80px;">
        <ul>{ watcher }</ul>
      </div>
    )
  },
  created() {
    this.$observables.watchlist.subscribe(ticker => {
      this.tickers.push(ticker)
    })
  }
}
</script>
