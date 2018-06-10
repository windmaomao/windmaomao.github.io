/**
 * Common module
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonComponents } from './common.routes';
import { CommonRoutes } from './common.routes';

@NgModule({
  declarations: [
    CommonComponents
  ],
  imports: [
    RouterModule.forChild(CommonRoutes),
  ],
  exports: [
  ],
  providers: [
  ]
})
export class AppCommonModule { }
