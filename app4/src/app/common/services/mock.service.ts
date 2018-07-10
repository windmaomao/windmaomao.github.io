/**
 * Mock Service
 */

import { InMemoryDbService  } from 'angular-in-memory-web-api';
import { TickerPrice } from './mock.ticker.price';
import { MarketBatch } from './mock.market.batch';
import { WatchLists } from './mock.watchlists';

export class MockService implements InMemoryDbService {
  createDb() {
    const price = TickerPrice;
    const watchlists = WatchLists;
    const marketbatch = MarketBatch;
    return { price, watchlists, marketbatch };
  }
}
