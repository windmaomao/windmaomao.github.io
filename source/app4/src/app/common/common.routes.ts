/**
 * Common routes
 */

import { Route } from '@angular/router';
import { CommonLayoutComponent } from './ui/layout';
import { CommonNavbarComponent } from './ui/navbar';
import { CommonSparkComponent } from './ui/spark';
import { CommonGainComponent } from './ui/gain';
import { CommonTickerComponent } from './ui/ticker';
import { CommonSpinnerComponent } from './ui/spinner';
import { CommonPageComponent } from './common.page';

import { TrimPipe } from './pipes/trim';
import { EllipsisPipe } from './pipes/ellipsis';

import { MockService } from './services/mock.service';
import { ActivityService } from './services/activity.service';

export const CommonComponents = [
  CommonLayoutComponent,
  CommonNavbarComponent,
  CommonSparkComponent,
  CommonGainComponent,
  CommonTickerComponent,
  CommonSpinnerComponent,
  CommonPageComponent,
  TrimPipe,
  EllipsisPipe
];

export const CommonServices = [
  MockService,
  ActivityService
];

export const CommonRoutes: Route[] = [
  {
    path: 'common', component: CommonPageComponent,
  }
];
