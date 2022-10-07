import { HttpParams } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { BranchOffice } from "src/app/admin/models/branch-office.model";
import { Company } from "src/app/admin/models/company.model";
import { User } from "src/app/admin/models/user.model";
import { BranchOfficeService } from "src/app/admin/services/branch-office.service";
import { UserService } from "src/app/admin/services/user.service";
import { environment } from "src/environments/environment";
import { CompaniesComponent } from "../../companies/list/companies.component";
import { finalize } from "rxjs";

@Component({
  selector: 'app-card-warn',
  templateUrl: './create-or-update-users.component.html'
})
export class UsersStoreOrUpdateComponent implements OnInit {
  @Input() user: User = {
    role: 3,
    state: 1,
  };
  branchOffices: BranchOffice[] = []

  isLoadingResults = false;
  showOtherFields = false;
  isSuper = environment.isSuper;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
    private branchOfficeService: BranchOfficeService,
    private ngbModal: NgbModal
  ) {}

  getUser(id: number) {
    this.branchOfficeService.getAll(new HttpParams())
      .subscribe(response => {
        this.branchOffices = response.data.items;
      });

    this.userService.get(id)
      .subscribe(response => {
        this.user = response.data;
      });
  }

  save() {
    this.isLoadingResults = true;
    const service = !this.user.id ? this.userService.store(this.user) : this.userService.update(this.user);

    service
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe(response => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = response.message;

        this.isLoadingResults = true;

        this.activeModal.close();
      });
  }

  searchCompany() {
    const modalRef = this.ngbModal.open(CompaniesComponent, Utils.modalXlIndex2);
    modalRef.componentInstance.isModal = true;

    modalRef.result.then((company: Company) => {
      this.user.company = company;
      this.user.company_id = company.id;
    }, Utils.none);
  }

  ngOnInit(): void {
    if (this.user.id) {
      this.getUser(this.user.id);
    }
  }
}
