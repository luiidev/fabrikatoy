import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { finalize } from "rxjs";
import { WarnModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { SaleService } from "src/app/admin/services/sale.service";

@Component({
  selector: 'app-card-warn',
  templateUrl: './customer-voucher.component.html'
})
export class CustomerVoucherComponent {
  isLoadingResults = false;
  @Input() customer: any;

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal,
    private saleService: SaleService
  ) { }

  selectVoucherType(type: string): void {
    if (this.customer.type === type) {
      this.customer.type = null;
      this.removeCustomer();
    } else {
      this.customer.type = type;
      this.customer.document_type = type === 'BOLETA' ? 'DNI' : 'RUC';
    }
  }

  searchUser(): void {
    if (this.customer.type === 'BOLETA') {
      if (this.customer.document_number.length !== 8) {
        const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenterIndex2);
        modalRef.componentInstance.message = 'El DNI debe tener 8 digitos.';
        return;
      }
    } else if (this.customer.type === 'FACTURA') {
      if (this.customer.document_number.length !== 11) {
        const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenterIndex2);
        modalRef.componentInstance.message = 'El RUC debe tener 11 digitos.';
        return;
      }
    }

    const params = {
      document_type: this.customer.type === 'BOLETA' ? 'DNI' : 'RUC',
      document_number: this.customer.document_number
    };

    this.isLoadingResults = true;
    this.saleService.getCustomer(params)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe((response) => {
          this.customer.searched = true;

          this.customer = Object.assign(this.customer, response.data);
      });
  }

  removeCustomer(): void {
    this.customer = {
      type: this.customer.type,
      document_type: null,
      document_number: null,
      name: null,
      address: null,
      email: null,
      phone: null,
      searched: false
    };
  }

  customerIsInvalid() {
    if (this.customer.type === 'BOLETA') {
      return !(this.customer.document_number && this.customer.document_number.length === 8 && this.customer.name);
    } else if (this.customer.type === 'FACTURA') {
      return !(this.customer.document_number && this.customer.document_number.length === 11 && this.customer.name && this.customer.address);
    }

    return true;
  }

  save(): void {
    this.activeModal.close(this.customer);
  }
}
