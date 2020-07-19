/**
 * App module
 */

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AppRoutes } from './app.routes';
import { AppCommonModule } from './common/common.module';
import { AppInvestModule } from './invest/invest.module';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent { }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    AppCommonModule,
    AppInvestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
