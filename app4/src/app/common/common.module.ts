/**
 * Common module
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './services/mock.service';

import { CommonComponents } from './common.routes';
import { CommonRoutes } from './common.routes';
import { CommonServices } from './common.routes';

@NgModule({
  declarations: [
    CommonComponents
  ],
  imports: [
    RouterModule.forChild(CommonRoutes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockService, {
        apiBase: '/',
        delay: 500,
        passThruUnknownUrl: true
      }
    )
  ],
  exports: [
    CommonComponents,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [CommonServices]
})
export class AppCommonModule { }
