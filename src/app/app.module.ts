import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

// Additionals packages
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

import { UiScrollModule } from 'ngx-ui-scroll';

const appRoutes: Routes = [{ path: '**', component: AppComponent }];

registerLocaleData(fr, 'fr');

// Retrieve access token
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export function jwtOptionsFactory() {
  return {
    tokenGetter,
    whitelistedDomains: ['example.com'],
    blacklistedRoutes: ['example.com/examplebadroute/']
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    }),
    AppRoutingModule,
    UiScrollModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
