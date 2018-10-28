import {observable, decorate, action, toJS} from 'mobx';
import { Trade, Transaction } from './model';
import api from './api';

export class Store {
  trades = [Trade];

  addTrade() {
    this.trades.push(Trade);
  }
  addTransaction(trade) {
    trade.transactions.push(Transaction);
  }

  async saveTrade(trade) {
    trade._meta.enabled = false;
    try {
      await api.saveTrade(trade);
    } finally {
      trade._meta.enabled = true;
    }    
  }
}

decorate(Store, {
  trades: observable,
  addTrade: action.bound,
  saveTrade: action.bound,
});

const store = new Store();

export default store;