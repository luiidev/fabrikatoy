import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  LocationStrategy,
  PathLocationStrategy,
  registerLocaleData
} from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEsPe from '@angular/common/locales/es-PE';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthorizationInterceptor } from './public/interceptors/authorization.interceptor';
import { CatchInterceptor } from './public/interceptors/catch.interceptor';
import { RoleuserInterceptor } from './public/interceptors/role-user.interceptor';

import { PublicModule } from './public/public.module';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localeEsPe);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { useHash: false, relativeLinkResolution: 'legacy' }),
    PublicModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RoleuserInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
