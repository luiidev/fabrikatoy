import { NgModule } from '@angular/core';
import { FullComponent } from '../shared/components/full/full.component';
import { NavigationComponent } from '../shared/components/header/navigation.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { SpinnerComponent } from '../shared/components/spiner/spinner.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { BrandsStoreOrUpdateComponent } from './components/brands/create-or-update/create-or-update-brands.component';
import { BrandsComponent } from './components/brands/list/brands.component';
import { CompaniesStoreOrUpdateComponent } from './components/companies/create-or-update/create-or-update-companies.component';
import { CompaniesComponent } from './components/companies/list/companies.component';
import { CompaniesSearchComponent } from './components/companies/search/companies-search.component';
import { CustomersStoreOrUpdateComponent } from './components/customers/create-or-update/create-or-update-customers.component';
import { CustomersComponent } from './components/customers/list/customers.component';
import { ProductStoreOrUpdateComponent } from './components/products/create-or-update/create-or-update-products.component';
import { ProductsComponent } from './components/products/list/products.component';
import { ProviderStoreOrUpdateComponent } from './components/providers/create-or-update/create-or-update-providers.component';
import { ProvidersComponent } from './components/providers/list/providers.component';
import { CustomerVoucherComponent } from './components/sales/customer-voucher/customer-voucher.component';
import { PointOfSaleComponent } from './components/sales/point-of-sale/point-of-sale.component';
import { UsersStoreOrUpdateComponent } from './components/users/create-or-update/create-or-update-users.component';
import { UsersComponent } from './components/users/list/users.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    FullComponent,
    NavigationComponent,
    SidebarComponent,
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
    CustomersStoreOrUpdateComponent,
    SpinnerComponent
  ],
  exports: [],
  providers: []
})
export class AdminModule {}
