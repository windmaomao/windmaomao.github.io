<script>
import { Observable, from } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

export default {
  name: 'Ticker',
  props: {},
  data: () => ({
    open: false
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
    return (
      <div id="ticker" style="position:fixed;bottom:80px;">
        DEFGHIJKL
      </div>
    )
  },
  created() {
    this.$observables.watchlist.subscribe(console.log)
  }
}
</script>
