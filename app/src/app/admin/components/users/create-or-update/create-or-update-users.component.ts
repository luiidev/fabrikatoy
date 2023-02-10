import { HttpParams } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SuccsessModalComponent } from "src/app/shared/helpers/modals/alerts.component";
import Utils from "src/app/shared/helpers/utils";
import { BranchOffice } from "src/app/admin/models/branch-office.model";
import { Company } from "src/app/admin/models/company.model";
import { ModuleAbility, User } from "src/app/admin/models/user.model";
import { BranchOfficeService } from "src/app/admin/services/branch-office.service";
import { UserService } from "src/app/admin/services/user.service";
import { environment } from "src/environments/environment";
import { CompaniesComponent } from "../../companies/list/companies.component";
import { finalize } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";

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

  showPersonalInfo = false;
  showRolePermission = false;

  modulePermission = [
    [
      { name: this.sanitizer.bypassSecurityTrustHtml('Usuarios<br>&nbsp;'), ability: 'user:list', state: false },
      { name: 'Crear', ability: 'user:create', state: false },
      { name: 'Actualizar', ability: 'user:update', state: false },
      { name: 'Eliminar', ability: 'user:delete', state: false },
    ],
    [
      { name: this.sanitizer.bypassSecurityTrustHtml('Productos<br>y Marcas'), ability: 'product:list', state: false },
      { name: 'Crear', ability: 'product:create', state: false },
      { name: 'Actualizar', ability: 'product:update', state: false },
      { name: 'Eliminar', ability: 'product:delete', state: false },
    ],
    [
      { name: this.sanitizer.bypassSecurityTrustHtml('Compras<br>y Proveedores'), ability: 'purchase:list', state: false      },
      { name: 'Crear', ability: 'purchase:create', state: false },
      { name: 'Actualizar', ability: 'purchase:update', state: false },
      { name: 'Eliminar', ability: 'purchase:delete', state: false },
    ],
    [
      { name: this.sanitizer.bypassSecurityTrustHtml('Ventas<br>y Clientes'), ability: 'sale:list', state: false },
      { name: 'Crear', ability: 'sale:create', state: false },
      { name: 'Actualizar', ability: 'sale:update', state: false },
      { name: 'Eliminar', ability: 'sale:delete', state: false },
      ]
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
    private branchOfficeService: BranchOfficeService,
    private ngbModal: NgbModal,
    private sanitizer: DomSanitizer
  ) {}

  getUser(id: number) {
    this.branchOfficeService.getAll(new HttpParams())
      .subscribe(response => {
        this.branchOffices = response.data.items;
      });

    this.userService.get(id)
      .subscribe(response => {
        this.user = response.data;

        if (this.user.abilities) {
          this.modulePermission.forEach((module) => {
            module.forEach((item) => {
              item.state = this.user.abilities?.indexOf(item.ability) !== -1;
            });
          });
        }
      });
  }

  save() {
    this.isLoadingResults = true;

    const abilities: string[] = [];

    this.modulePermission.forEach((module) => {
      module.forEach((item) => {
        if (item.state === true) {
          abilities.push(item.ability);
        }
      });
    });

    this.user.abilities = abilities;

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

  togglePersonalInfo() {
    this.showPersonalInfo = !this.showPersonalInfo;
  }

  toggleRoleAbilities() {
    this.showRolePermission = !this.showRolePermission;
  }

  tooglePermission(item: ModuleAbility, module: ModuleAbility[]) {
    if ([
      'user:list',
      'product:list',
      'purchase:list',
      'sale:list',
    ].includes(item.ability)) {
      module.forEach(moduleItem => {
        moduleItem.state = item.state
      });
    }
  }

  ngOnInit(): void {
    if (this.user.id) {
      this.getUser(this.user.id);
    }
  }
}
