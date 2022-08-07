import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SuccsessModalComponent, WarnModalComponent } from './helpers/modals/alerts.component';
import { SearchComponent } from './helpers/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  declarations: [
    SuccsessModalComponent,
    WarnModalComponent,
    SearchComponent,
    NotFoundComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    SuccsessModalComponent,
    WarnModalComponent,
    SearchComponent
  ],
  providers: [
    {
      provide: NgbActiveModal
    }
  ]
})
export class SharedModule {}
