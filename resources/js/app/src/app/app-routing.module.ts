import { Routes } from '@angular/router';

import { ProfileComponent } from './admin/profile/profile.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProvidersComponent } from './admin/providers/providers.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { PointOfSaleComponent } from './admin/sales/sales.component';
import { UsersComponent } from './admin/users/users.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { FullComponent } from './shared/components/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/perfil', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule)
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
  {
    path: '**',
    redirectTo: '/perfil'
  }
];
