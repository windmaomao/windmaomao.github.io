import {observable, decorate, action} from 'mobx';
import { Trade, Transaction } from './model';

class Store {
  trades = [Trade];
  addTrade() {
    this.trades.push(Trade);
  }
  addTransaction(trade) {
    trade.transactions.push(Transaction);
  }
}

decorate(Store, {
  trades: observable,
  addTrade: action.bound,
});

export default Store;