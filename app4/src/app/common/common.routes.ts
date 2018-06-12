/**
 * Common routes
 */

import { Route } from '@angular/router';
import { CommonLayoutComponent } from './ui/layout';
import { CommonNavbarComponent } from './ui/navbar';
import { CommonSparkComponent } from './ui/spark';
import { CommonGainComponent } from './ui/gain';
import { CommonPageComponent } from './common.page';

import { MockService } from './services/mock.service';

export const CommonComponents = [
  CommonLayoutComponent,
  CommonNavbarComponent,
  CommonSparkComponent,
  CommonGainComponent,
  CommonPageComponent,
];

export const CommonServices = [
  MockService
];

export const CommonRoutes: Route[] = [
  {
    path: 'common', component: CommonPageComponent,
  }
];
