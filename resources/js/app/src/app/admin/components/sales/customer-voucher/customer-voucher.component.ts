import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { finalize } from "rxjs";
import { WarnModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { Customer, SearchCustomer } from "src/app/admin/models/customer.model";
import { CustomerService } from "src/app/admin/services/customer.service";

@Component({
  selector: 'app-card-warn',
  templateUrl: './customer-voucher.component.html'
})
export class CustomerVoucherComponent {
  isLoadingResults = false;
  @Input() customer: Customer = {
    document_type: null,
    document_number: null,
    name: '',
    state: 1,
    searched: false
  };

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal,
    private customerService: CustomerService
  ) { }

  selectVoucherType(document_type: string): void {
    if (this.customer.document_type === document_type) {
      this.removeCustomer();
    } else {
      this.customer.document_type = document_type;
    }
  }

  searchUser(): void {
    if (this.customer.document_type === 'DNI') {
      if (!this.customer.document_number || this.customer.document_number.length !== 8) {
        const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenterIndex2);
        modalRef.componentInstance.message = 'El DNI debe tener 8 digitos.';
        return;
      }
    } else if (this.customer.document_type === 'RUC') {
      if (!this.customer.document_number || this.customer.document_number.length !== 11) {
        const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenterIndex2);
        modalRef.componentInstance.message = 'El RUC debe tener 11 digitos.';
        return;
      }
    }

    const params: SearchCustomer = {
      document_type: this.customer.document_type ?? '',
      document_number: this.customer.document_number ?? ''
    };

    this.isLoadingResults = true;
    this.customerService.getForSale(params)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe((response) => {
          this.customer.searched = true;

          Object.assign(this.customer, response.data);
      });
  }

  removeCustomer(): void {
    this.customer = {
      document_type: this.customer.document_type,
      document_number: null,
      name: '',
      address: null,
      email: null,
      phone: null,
      searched: false
    };
  }

  customerIsInvalid() {
    if (this.customer.document_type === 'DNI') {
      return !(this.customer.document_number && this.customer.document_number.length === 8 && this.customer.name);
    } else if (this.customer.document_type === 'RUC') {
      return !(this.customer.document_number && this.customer.document_number.length === 11 && this.customer.name && this.customer.address);
    }

    return true;
  }

  save(): void {
    this.activeModal.close(this.customer);
  }
}
