import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutes } from '../app-routing.module';
import { FullComponent } from './components/full/full.component';
import { NavigationComponent } from './components/header/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VerticalSidebarService } from './components/sidebar/sidebar.service';
import { SpinnerComponent } from './components/spiner/spinner.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CatchInterceptor } from './interceptors/catch.interceptor';
import { RoleuserInterceptor } from './interceptors/roleuser.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forRoot(AppRoutes, { useHash: false, relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    SpinnerComponent,
  ],
  exports: [
    SpinnerComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
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
      provide: VerticalSidebarService
    },
    {
      provide: NgbActiveModal
    }
  ]
})
export class SharedModule {}
