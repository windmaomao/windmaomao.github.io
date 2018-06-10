/**
 * Common routes
 */

import { Route } from '@angular/router';
import { CommonLayoutComponent } from './ui/layout';
import { CommonNavbarComponent } from './ui/navbar';
import { CommonPageComponent } from './common.page';

export const CommonComponents = [
  CommonLayoutComponent,
  CommonNavbarComponent,
  CommonPageComponent,
];

export const CommonRoutes: Route[] = [
  {
    path: 'common',         component: CommonPageComponent,
  }
];
