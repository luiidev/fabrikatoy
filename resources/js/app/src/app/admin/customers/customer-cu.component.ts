import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/helpers/modals/modals.component";
import Utils from "src/app/helpers/utils";
import { Company } from "src/app/models/company.model";
import CustomerRequest, { Customer } from "src/app/models/customer.model";
import { CustomerService } from "src/app/services/customer.service";
import { environment } from "src/environments/environment";
import { CompaniesComponent } from "../companies/companies.component";

@Component({
  selector: 'app-card-warn',
  templateUrl: './customer-cu.component.html'
})
export class CustomersStoreOrUpdateComponent {
  @Input() customer: Customer = {
    document_type: null,
    document_number: null,
    name: '',
    state: 1
  };

  isLoadingResults = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private customerService: CustomerService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    // const data = CustomerRequest.data(this.customer);
    const data = this.customer;
    const service = !this.customer.id ? this.customerService.store(data) : this.customerService.update(data);

    service
      .subscribe(response => {
        const modalRef  = this.ngbModal.open(SuccsessModalComponent, { centered: true });
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }

  searchCompany() {
    const modalRef  = this.ngbModal.open(CompaniesComponent, { size: 'xl', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' });
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.customer.company = company;
      this.customer.company_id = company.id;
    }, Utils.none);
  }
}
