import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/helpers/modals/alerts.component";
import Utils from "src/app/helpers/utils";
import { Company } from "src/app/models/company.model";
import { CompanyService } from "src/app/services/company.service";

@Component({
  selector: 'app-card-warn',
  templateUrl: './companies-cu.component.html'
})
export class CompaniesStoreOrUpdateComponent {
  @Input() company: Company = {
    ruc: '',
    name: '',
    address: '',
    website: '',
    state: 1
  };

  isLoadingResults = false;

  constructor(
    public activeModal: NgbActiveModal,
    private companyService: CompanyService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    const service = !this.company.id ? this.companyService.store(this.company) : this.companyService.update(this.company);

    service
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }
}
