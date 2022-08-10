import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { Brand } from "src/app/admin/models/brand.model";
import { Company } from "src/app/admin/models/company.model";
import { Product } from "src/app/admin/models/product.model";
import { Provider } from "src/app/admin/models/provider.model";
import { ProductService } from "src/app/admin/services/product.service";
import { environment } from "src/environments/environment";
import { BrandsComponent } from "../../brands/list/brands.component";
import { CompaniesComponent } from "../../companies/list/companies.component";
import { ProvidersComponent } from "../../providers/list/providers.component";
import { finalize } from "rxjs";

@Component({
  selector: 'app-card-warn',
  templateUrl: './create-or-update-products.component.html'
})
export class ProductStoreOrUpdateComponent {
  @Input() product: Product = {
    code: '',
    name: '',
    state: 1,
    providers: []
  };

  isLoadingResults = false;
  showChangeCompany = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private productService: ProductService,
    private ngbModal: NgbModal
  ) {}

  save() {
    this.isLoadingResults = true;

    const data = this.cloneProduct(this.product);

    const service = !this.product.id ? this.productService.store(data) : this.productService.update(data);

    service
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.activeModal.close();
      });
  }

  cloneProduct({brand_id, code, name , providers, state}: Product): Product {
    const product: Product = {
      brand_id: brand_id,
      code: code,
      name: name ,
      providers_id: providers?.map((p: Provider) => p.id ?? 0) || [],
      state: state
    };

    return product;
  }

  del(provider: Provider) {
    if (this.product.providers) {
      const index = this.product.providers.findIndex((parentProvider) => parentProvider.id === provider.id);
      this.product.providers.splice(index, 1);
    }
  }

  searchProvider() {
    const modalRef = this.ngbModal.open(ProvidersComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((provider: Provider) => {
      this.product.providers?.push(provider);
    }, Utils.none);
  }

  searchBrand() {
    const modalRef = this.ngbModal.open(BrandsComponent, Utils.modalLgIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((brand: Brand) => {
      this.product.brand = brand;
      this.product.brand_id = brand.id;
    }, Utils.none);
  }

  searchCompany() {
    const modalRef = this.ngbModal.open(CompaniesComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.product.company = company;
      this.product.company_id = company.id;
    }, Utils.none);
  }
}
