/**
 * Invest routes
 */

import { Route } from '@angular/router';
import { InvestPageComponent } from './invest.page';
import { StockService } from './services/stock.service';
import { IEXService } from './services/iex.service';

export const InvestComponents = [
  InvestPageComponent,
];

export const InvestServices = [
  StockService,
  IEXService
]

export const InvestRoutes: Route[] = [
  {
    path: 'invest', component: InvestPageComponent,
  }
];
