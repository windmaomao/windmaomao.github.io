/**
 * Invest module
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvestComponents } from './invest.routes';
import { InvestRoutes } from './invest.routes';
import { AppCommonModule } from '../common/common.module';

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
  ]
})
export class AppInvestModule { }
