import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProvidersComponent } from './admin/providers/providers.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { PointOfSaleComponent } from './admin/sales/sales.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/perfil', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
				path: 'login',
				component: LoginComponent
      },
      {
				path: 'perfil',
				component: ProfileComponent
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
				path: 'punto-de-venta',
				component: PointOfSaleComponent
			},
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
