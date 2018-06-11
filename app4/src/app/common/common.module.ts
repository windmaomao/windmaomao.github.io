/**
 * Common module
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonComponents } from './common.routes';
import { CommonRoutes } from './common.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CommonComponents
  ],
  imports: [
    RouterModule.forChild(CommonRoutes),
    HttpClientModule
  ],
  exports: [
    CommonComponents,
    HttpClientModule
  ],
  providers: [
  ]
})
export class AppCommonModule { }
