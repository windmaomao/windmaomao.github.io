import {observable, decorate, action} from 'mobx';
import { Trade } from './model';

class Store {
  trades = [Trade];
  addTrade() {
    this.trades.push(Trade);
  }
}

decorate(Store, {
  trades: observable,
  addTrade: action.bound,
});

export default Store;