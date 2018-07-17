/*
 * App module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav.component';
import { HeaderComponent } from './header.component';
import { SafePipe } from './safe.pipe';

import { slider, apps, app, error } from './app.reducer';
import { AppEffects } from './app.effect';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ slider, apps, app, error }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
