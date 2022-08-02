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
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VerticalSidebarService } from './shared/sidebar/sidebar.service';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CdkTableModule } from '@angular/cdk/table';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CatchInterceptor } from './interceptors/catch.interceptor';

import { RoleuserInterceptor } from './interceptors/roleuser.interceptor';

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
      provide: VerticalSidebarService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
