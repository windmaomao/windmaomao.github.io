import {observable, decorate, action, toJS} from 'mobx';
import { Trade, Transaction } from './model';
import firebase from './firebase';

export class Store {
  db = firebase.database();
  trades = [Trade];

  addTrade() {
    this.trades.push(Trade);
  }
  addTransaction(trade) {
    trade.transactions.push(Transaction);
  }

  saveTrade(trade) {
    return this.db.ref(`Trade/${trade.name}`).set(toJS(trade));
  }
}

decorate(Store, {
  trades: observable,
  addTrade: action.bound,
  saveTrade: action.bound,
});

const store = new Store();

export default store;