import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { SearchComponent } from './helpers/search/search.component';
import { LoginComponent } from './admin/login/login.component';

import { ProductsComponent } from './admin/products/products.component';
import { ProductStoreOrUpdateComponent } from './admin/products/products-cu.component';

import { ProvidersComponent } from './admin/providers/providers.component';
import { ProviderStoreOrUpdateComponent } from './admin/providers/providers-cu.component';

import { CompaniesComponent } from './admin/companies/companies.component';
import { CompaniesStoreOrUpdateComponent } from './admin/companies/companies-cu.component';
import { CompaniesSearchComponent } from './admin/companies/companies-search.component';

import { BrandsComponent } from './admin/brands/brands.component';
import { BrandsStoreOrUpdateComponent } from './admin/brands/brands-cu.component';

import { UsersComponent } from './admin/users/users.component';
import { UsersStoreOrUpdateComponent } from './admin/users/users-cu.component';

import { PointOfSaleComponent } from './admin/sales/sales.component';
import { CustomerVoucherComponent } from './admin/sales/sales-cu.component';

import { CustomersComponent } from './admin/customers/customers.component';
import { CustomersStoreOrUpdateComponent } from './admin/customers/customers-cu.component';
import { SharedModule } from './shared/shared.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    ProductsComponent,
    ProductStoreOrUpdateComponent,
    ProvidersComponent,
    ProviderStoreOrUpdateComponent,
    CompaniesSearchComponent,
    CompaniesComponent,
    CompaniesStoreOrUpdateComponent,
    BrandsComponent,
    BrandsStoreOrUpdateComponent,
    PointOfSaleComponent,
    CustomerVoucherComponent,
    UsersComponent,
    UsersStoreOrUpdateComponent,
    CustomersComponent,
    CustomersStoreOrUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { useHash: false, relativeLinkResolution: 'legacy' }),
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
