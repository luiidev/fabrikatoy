import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { Company } from "src/app/admin/models/company.model";
import ProviderRequest, { Provider } from "src/app/admin/models/provider.model";
import { ProviderService } from "src/app/admin/services/provider.service";
import { environment } from "src/environments/environment";
import { CompaniesComponent } from "../../companies/list/companies.component";
import { finalize } from "rxjs";

@Component({
  selector: 'app-card-warn',
  templateUrl: './create-or-update-providers.component.html'
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
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.activeModal.close();
      });
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
