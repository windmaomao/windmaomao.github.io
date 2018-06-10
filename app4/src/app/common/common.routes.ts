/**
 * Common routes
 */

import { Route } from '@angular/router';
import { CommonPageComponent } from './common.page';

export const CommonComponents = [
  CommonPageComponent,
];

export const CommonRoutes: Route[] = [
  {
    path: 'common',         component: CommonPageComponent,
  }
];
