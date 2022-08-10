import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { Brand } from "src/app/admin/models/brand.model";
import { Company } from "src/app/admin/models/company.model";
import { BrandService } from "src/app/admin/services/brand.service";
import { environment } from "src/environments/environment";
import { CompaniesComponent } from "../../companies/list/companies.component";
import { finalize } from "rxjs";

@Component({
  selector: 'app-card-warn',
  templateUrl: './create-or-update-brands.component.html'
})
export class BrandsStoreOrUpdateComponent {
  @Input() brand: Brand = {
    name: '',
    state: 1
  };

  isLoadingResults = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private brandService: BrandService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;
    const service = !this.brand.id ? this.brandService.store(this.brand) : this.brandService.update(this.brand);

    service
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.activeModal.close();
      });
  }

  searchCompany() {
    const modalRef = this.ngbModal.open(CompaniesComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.brand.company = company;
      this.brand.company_id = company.id;
    }, Utils.none);
  }
}
