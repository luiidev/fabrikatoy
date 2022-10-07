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

  printInvoice() {
    const printContent = document.getElementById("print-invoice");
    const WindowPrt = window.open('', '', 'left=0,top=50,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    if (printContent && WindowPrt) {
      WindowPrt.document.write(printContent.innerHTML);
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
      WindowPrt.close();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getSaleDetail(params['uuid']);
    });
  }
}
