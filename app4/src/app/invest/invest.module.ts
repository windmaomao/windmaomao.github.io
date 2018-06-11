/**
 * Invest module
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvestComponents } from './invest.routes';
import { AppCommonModule } from '../common/common.module';

import { InvestRoutes } from './invest.routes';
import { InvestServices } from './invest.routes';

@NgModule({
  declarations: [
    InvestComponents
  ],
  imports: [
    RouterModule.forChild(InvestRoutes),
    AppCommonModule
  ],
  exports: [
  ],
  providers: [
    InvestServices
  ]
})
export class AppInvestModule { }
