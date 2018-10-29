import {observable, decorate, action, set} from 'mobx';
import { Trade, Transaction } from './model';
import api from './api';

export class Store {
  trades = [Trade];
  tradeList = [];

  constructor() {
    this.updateTradeList();
  }

  addTrade() {
    this.trades.push(Trade);
  }

  addTransaction(trade) {
    trade.transactions.push(Transaction);
  }

  resetTrade(trade) {
    Object.assign(trade, Trade);
  }

  async saveTrade(trade) {
    trade._meta.enabled = false;
    try {
      await api.saveTrade(trade);
    } finally {
      trade._meta.enabled = true;
    }    
  }

  async loadTrade(trade) {
    try {
      const data = await api.loadTrade(trade.symbol);
      set(trade, data);
    } finally {}
  }

  async updateTradeList() {
    try {
      const data = await api.loadTradeList();
      this.tradeList.replace(data.split(','));
    } finally {}
  }

}

decorate(Store, {
  trades: observable,
  addTrade: action.bound,
  resetTrade: action.bound,
  saveTrade: action.bound,
  loadTrade: action.bound,
  tradeList: observable,
});

const store = new Store();

export default store;