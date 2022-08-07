import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from '../shared/components/full/full.component';
import { BrandsComponent } from './components/brands/list/brands.component';
import { CompaniesComponent } from './components/companies/list/companies.component';
import { CustomersComponent } from './components/customers/list/customers.component';
import { ProductsComponent } from './components/products/list/products.component';
import { ProfileComponent } from './components/profile/card/profile.component';
import { ProvidersComponent } from './components/providers/list/providers.component';
import { PointOfSaleComponent } from './components/sales/point-of-sale/point-of-sale.component';
import { UsersComponent } from './components/users/list/users.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/admin/perfil', pathMatch: 'full' },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
      // },
      {
        path: 'perfil',
        component: ProfileComponent
      },
      {
        path: 'usuarios',
        component: UsersComponent
      },
      {
        path: 'productos',
        component: ProductsComponent
      },
      {
        path: 'proveedores',
        component: ProvidersComponent
      },
      {
        path: 'empresas',
        component: CompaniesComponent
      },
      {
        path: 'marcas',
        component: BrandsComponent
      },
      {
        path: 'clientes',
        component: CustomersComponent
      },
      {
        path: 'punto-de-venta',
        component: PointOfSaleComponent
      },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
