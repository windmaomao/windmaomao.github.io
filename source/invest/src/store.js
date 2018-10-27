import {observable, decorate} from 'mobx';
import { Trade } from './model';

class Store {
  trades = [Trade];
}

decorate(Store, {
  trades: observable
});

export default Store;