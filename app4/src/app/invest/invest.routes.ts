/**
 * Invest routes
 */

import { Route } from '@angular/router';
import { InvestPageComponent } from './invest.page';

export const InvestComponents = [
  InvestPageComponent,
];

export const InvestRoutes: Route[] = [
  {
    path: 'invest', component: InvestPageComponent,
  }
];
