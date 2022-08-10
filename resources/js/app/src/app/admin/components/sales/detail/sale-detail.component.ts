import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs';
import { Sale } from 'src/app/admin/models/sale.model';
import { SaleService } from 'src/app/admin/services/sale.service';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html'
})
export class SaleDetailComponent {
  sale: Sale = {
    type: null,
    number: null,
    document: null,
    date: '',
    subtotal: 0,
    igv: 0,
    total: 0,
    state: 1,
  };
  isLoadingResults = true;

  constructor(
    private readonly route: ActivatedRoute,
    private saleService: SaleService
  ) { }

  getSaleDetail(uuid: string): void {
    this.saleService.get(uuid)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe(response => {
        this.sale = response.data;
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getSaleDetail(params['uuid']);
    });
  }
}
