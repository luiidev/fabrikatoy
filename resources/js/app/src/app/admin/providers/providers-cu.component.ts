import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/helpers/modals/alerts.component";
import Utils from "src/app/helpers/utils";
import { Company } from "src/app/models/company.model";
import ProviderRequest, { Provider } from "src/app/models/provider.model";
import { ProviderService } from "src/app/services/provider.service";
import { environment } from "src/environments/environment";
import { CompaniesComponent } from "../companies/companies.component";

@Component({
  selector: 'app-card-warn',
  templateUrl: './providers-cu.component.html'
})
export class ProviderStoreOrUpdateComponent {
  @Input() provider: Provider = {
    ruc: '',
    name: '',
    address: '',
    state: 1
  };

  isLoadingResults = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private providerService: ProviderService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    const data = ProviderRequest.data(this.provider);
    const service = !this.provider.id ? this.providerService.store(data) : this.providerService.update(data);

    service
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      }, () =>  this.isLoadingResults = false);
  }

  searchCompany() {
    const modalRef = this.ngbModal.open(CompaniesComponent,Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.provider.company = company;
      this.provider.company_id = company.id;
    }, Utils.none);
  }
}
