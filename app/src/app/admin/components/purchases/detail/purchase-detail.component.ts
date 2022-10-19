import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs';
import { Purchase } from 'src/app/admin/models/purchase.model';
import { PurchaseService } from 'src/app/admin/services/purchase.service';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html'
})
export class PurchaseDetailComponent {
  purchase: Purchase = {
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
    private purchaseService: PurchaseService
  ) { }

  getPurchaseDetail(uuid: string): void {
    this.purchaseService.get(uuid)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe(response => {
        this.purchase = response.data;
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
      this.getPurchaseDetail(params['uuid']);
    });
  }
}
