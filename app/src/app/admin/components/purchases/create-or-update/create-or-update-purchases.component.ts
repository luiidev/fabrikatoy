import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { Purchase, PurchaseDetail } from "src/app/admin/models/purchase.model";
import { PurchaseService } from "src/app/admin/services/purchase.service";
import { environment } from "src/environments/environment";
import { finalize } from "rxjs";
import { ProductsComponent } from "../../products/list/products.component";
import { Product } from "src/app/admin/models/product.model";
import { ProvidersComponent } from "../../providers/list/providers.component";
import { CompaniesComponent } from "../../companies/list/companies.component";
import { Company } from "src/app/admin/models/company.model";
import { Provider } from "src/app/admin/models/provider.model";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-warn',
  templateUrl: './create-or-update-purchases.component.html'
})
export class PurchasesStoreOrUpdateComponent {
  @Input() purchase: Purchase = this.initialSale();

  isLoadingResults = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private purchaseService: PurchaseService,
    private ngbModal: NgbModal,
    private _snackBar: MatSnackBar
  ) {}

  save() {
    this.isLoadingResults = true;
    const purchase = this.purchaseRequest(this.purchase);
    const service = !this.purchase.id ? this.purchaseService.store(purchase) : this.purchaseService.update(purchase);

    service
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.activeModal.close();
      });
  }

  purchaseRequest(purchase: Purchase): Purchase {
    return {
      provider_id: purchase.provider_id,
      type: purchase.type,
      number: purchase.number,
      date: purchase.date,
      document: purchase.document,
      detail: purchase.detail?.map((item) => {
        console.log(item);
        const purchaseDetail: PurchaseDetail = {
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
          total: item.total,
          unit_id: item.unit_id,
          observation: item.observation
        };

        return purchaseDetail;
      })
    };
  }

  searchCompany() {
    const modalRef = this.ngbModal.open(CompaniesComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.purchase.company = company;
      this.purchase.company_id = company.id;
    }, Utils.none);
  }

  searchProvider() {
    const modalRef = this.ngbModal.open(ProvidersComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((provider: Provider) => {
      this.purchase.provider_id = provider.id as number;
      this.purchase.provider = provider;
    }, Utils.none);
  }

  searchProduct() {
    const modalRef = this.ngbModal.open(ProductsComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((product: Product) => {
      const exists = this.purchase.detail?.some((parentItem) => parentItem.product_id === product.id);

      if (!exists) {
        const item: PurchaseDetail = {
          product_id: product.id as number,
          unit_id: product.unit_id as number,
          quantity: 0,
          price: 0.00,
          total: 0.00,
          observation: null,
          product: product
        };

        this.purchase.detail?.push(item);
      } else {
        this._snackBar.open(`El Producto ${product.name} ya se encuentra en la lista.`, 'Cerrar', Utils.snackBarWarn);
      }

    }, Utils.none);
  }

  del(item: PurchaseDetail) {
    if (this.purchase.detail) {
      const index = this.purchase.detail.findIndex((parentItem) => parentItem.id === item.id);
      this.purchase.detail.splice(index, 1);
    }
  }

  trackDetail(index: number, item: PurchaseDetail) {
    return item.product_id;
  }

  initialSale(): Purchase {
    return {
      provider_id: null,
      type: 'FACTURA',
      number: null,
      document: null,
      date: null,
      subtotal: 0,
      igv: 0,
      total: 0,
      detail: []
    };
  }
}
