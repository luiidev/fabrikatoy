import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header/navigation.component';
import { MenuEventService, SidebarComponent } from './shared/sidebar/sidebar.component';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CdkTableModule } from '@angular/cdk/table';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CatchInterceptor } from './interceptors/catch.interceptor';

import { SearchComponent } from './admin/search/search.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductsComponent, ProductStoreOrUpdateComponent } from './admin/products/products.component';
import { ProvidersComponent, ProviderStoreOrUpdateComponent } from './admin/providers/providers.component';
import { CompaniesComponent, SearchComponent as CompanySearchComponent, CompaniesStoreOrUpdateComponent } from './admin/companies/companies.component'
import { BrandsComponent, BrandsStoreOrUpdateComponent } from './admin/brands/brands.component';
import { RoleuserInterceptor } from './interceptors/roleuser.interceptor';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    SearchComponent,
    LoginComponent,
    ProductsComponent,
    ProductStoreOrUpdateComponent,
    ProvidersComponent,
    ProviderStoreOrUpdateComponent,
    CompanySearchComponent,
    CompaniesComponent,
    CompaniesStoreOrUpdateComponent,
    BrandsComponent,
    BrandsStoreOrUpdateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes, { useHash: false, relativeLinkResolution: 'legacy' }),
    PerfectScrollbarModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
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
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: NgbActiveModal
    },
    {
      provide: MenuEventService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
