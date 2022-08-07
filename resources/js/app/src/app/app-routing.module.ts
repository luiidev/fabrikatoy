import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/components/login/login.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
				path: 'admin',
				loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
