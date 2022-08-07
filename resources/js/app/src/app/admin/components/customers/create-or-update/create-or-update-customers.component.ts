import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { Company } from "src/app/admin/models/company.model";
import { Customer } from "src/app/admin/models/customer.model";
import { CustomerService } from "src/app/admin/services/customer.service";
import { environment } from "src/environments/environment";
import { CompaniesComponent } from "../../companies/list/companies.component";

@Component({
  selector: 'app-card-warn',
  templateUrl: './create-or-update-customers.component.html'
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
    const service = !this.customer.id ? this.customerService.store(this.customer) : this.customerService.update(this.customer);

    service
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }

  searchCompany() {
    const modalRef = this.ngbModal.open(CompaniesComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.customer.company = company;
      this.customer.company_id = company.id;
    }, Utils.none);
  }
}
