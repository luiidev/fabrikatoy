import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { SuccsessModalComponent, WarnModalComponent } from 'src/app//admin/modals/modals.component';
import Utils from 'src/app/helpers/utils';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
})
export class PointOfSaleComponent implements OnInit {
  isLoadingResults = true;
  showPanel: boolean = false;
  products: Product[] = [];
  productFilter: any = {
    search: null,
    category_id: null
  };
  categories: Category[] = [
    {
      name: 'Todo',
      state: 1,
      selected: true
    }
  ];
  taxes_included: Boolean = false;

  sale: any = this.initialSale();

  constructor(
    private productService: ProductService,
    private ngbModal: NgbModal,
    private saleService: SaleService
  ) { }

  showPanelToggle(): void {
    this.showPanel = !this.showPanel;
  }

  listCategories(): void {
    this.productService.getCategories()
    .subscribe((response) => {
      this.categories = this.categories.concat(response.data.items);
    });
  }

  categorySelected(category: Category): void {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });

    this.productFilter.category_id = category.id;

    this.list();
  }

  searchProduct(search: string): void {
    this.productFilter.search = search;

    this.list();
  }

  list(): void {
    this.isLoadingResults = true;
    this.productService.getForSale(this.productFilter)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe((response) => {
        this.products = response.data.items;
        this.taxes_included = response.data.taxes_included === 1;
      });
  }

  add(product: Product): void {
    const index = this.getProductIndex(product);

    if (index !== -1) {
      this.sum(this.sale.products[index]);
    } else {
      this.sale.products.push({...product, quantity_sale: 1});

      this.refreshSaleAmount();
    }
  }

  sum(product: any): void {
    if (product.quantity_sale > product.quantity) {
      const modalRef = this.ngbModal.open(WarnModalComponent, { centered: true });
      modalRef.componentInstance.message = 'Se alcanzo el limite de stock del producto.';
    } else {
      product.quantity_sale++;
    }

    this.refreshSaleAmount();
  }

  minus(product: any): void {
    product.quantity_sale--;

    if (product.quantity_sale === 0) {
      this.remove(product);
    }

    this.refreshSaleAmount();
  }

  remove(product: any): void {
    const index = this.getProductIndex(product);

    this.sale.products.splice(index, 1);

    this.refreshSaleAmount();
  }

  refreshSaleAmount(): void {
    this.sale.products.forEach((product: any) => {
      product.subtotal = product.quantity_sale * product.price;
    });

    if (this.taxes_included) {
      this.sale.total = this.sale.products.reduce((previousValue: number, currentValue: any) => previousValue + (currentValue.quantity_sale * currentValue.price), 0);

      this.sale.subtotal = this.sale.total * 0.82;
      this.sale.igv = this.sale.total * 0.18;
    }
  }

  getProductIndex(product: any) {
    return this.sale.products.findIndex((p: any) => p.id === product.id);
  }

  voucher(type: string): void {
    const modalRef = this.ngbModal.open(CustomerVoucherComponent, { backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' });

    modalRef.componentInstance.customer = Utils.replicate(this.sale.customer);

    modalRef.result
      .then((customer: any) => {
        this.sale.customer = customer;
      }, Utils.none);
  }

  removeCustomer(): void {
    this.sale.customer = {
      document_type: null,
      document_number: null,
      name: null,
      address: null,
      email: null,
      phone: null,
      searched: false
    };
  }

  save(): void {
    this.isLoadingResults = true;
    this.saleService.store(this.sale)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe((response) => {
        const modalRef = this.ngbModal.open(SuccsessModalComponent, Utils.modalCenterIndex1)
        modalRef.componentInstance.message = response.message;

        this.sale = this.initialSale();
      });
  }

  initialSale(): any {
    return {
      subtotal: 0.00,
      discount: 0.00,
      igv: 0.00,
      total: 0.00,
      products: [],
      customer: {
        document_type: null,
        document_number: null,
        name: null,
        address: null,
        email: null,
        phone: null,
        searched: false
      }
    };
  }

  ngOnInit(): void {
    this.listCategories();
    this.list();
  }
}

@Component({
  selector: 'app-card-warn',
  template: `
    <spinner *ngIf="isLoadingResults"></spinner>
    <div class="card m-0">
      <div class="card-header bg-light">
        <h4 class="card-title">
          Información del cliente
        </h4>
        <span class="btn-close-2" (click)="activeModal.dismiss()"></span>
      </div>
      <div class="card-body">
        <div class="form-body">
          <div class="d-flex mb-3" [class.not-events]="customer.id">
            <div class="p-3 flex-grow-1 text-center pointer" [class.text-white]="customer.type === 'BOLETA'" [class.bg-light]="customer.type === 'BOLETA'" (click)="selectVoucherType('BOLETA')">
              Boleta
            </div>
            <div class="p-3 flex-grow-1 text-center pointer" [class.text-white]="customer.type === 'FACTURA'" [class.bg-light]="customer.type === 'FACTURA'" (click)="selectVoucherType('FACTURA')">
              Factura
            </div>
          </div>
          <div class="customer" *ngIf="customer.type">
            <div class="row" [class.not-events]="customer.id">
              <div class="col-6">
                <div class="mb-3" *ngIf="customer.type === 'BOLETA'">
                  <label for="dni" class="control-label"><i class="fa fa-asterisk mr-5 text-danger"></i>DNI</label>
                  <input type="text" name="dni" class="form-control" placeholder="DNI" [(ngModel)]="customer.document_number">
                </div>
                <div class="mb-3" *ngIf="customer.type === 'FACTURA'">
                  <label for="ruc" class="control-label"><i class="fa fa-asterisk mr-5 text-danger"></i>RUC</label>
                  <input type="text" name="ruc" class="form-control" placeholder="RUC" [(ngModel)]="customer.document_number">
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="control-label">&nbsp;</label>
                  <span class="btn btn-info d-block" (click)="searchUser()" *ngIf="!customer.id">Buscar</span>
                </div>
              </div>
            </div>
            <div class="info" *ngIf="customer.searched" [class.not-events]="customer.id">
              <div class="row">
                <div class="col-12">
                  <div class="mb-3" *ngIf="customer.type === 'BOLETA'">
                    <label for="name"><i class="fa fa-asterisk mr-5 text-danger"></i>Nombres completos</label>
                    <input type="text" name="name" class="form-control" placeholder="Nombre" [(ngModel)]="customer.name">
                  </div>
                  <div class="mb-3" *ngIf="customer.type === 'FACTURA'">
                    <label for="name"><i class="fa fa-asterisk mr-5 text-danger"></i>Razon social</label>
                    <input type="text" name="name" class="form-control" placeholder="Nombre" [(ngModel)]="customer.name">
                  </div>
                </div>
              </div>
              <div class="row" *ngIf="customer.type === 'FACTURA'">
                <div class="col-12">
                  <div class="mb-3">
                    <label for="address"><i class="fa fa-asterisk mr-5 text-danger"></i>Dirección</label>
                    <input type="text" name="address" class="form-control" placeholder="Dirección" [(ngModel)]="customer.address">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label for="email">Correo</label>
                    <input type="text" name="email" class="form-control" placeholder="Correo" [(ngModel)]="customer.email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label for="phone">Teléfono</label>
                    <input type="text" name="phone" class="form-control" placeholder="Teléfono" [(ngModel)]="customer.phone">
                  </div>
                </div>
              </div>
            </div>
            <span class="d-block pointer text-end text-info" *ngIf="customer.id" (click)="removeCustomer()">Elegir otro cliente</span>
          </div>
          <hr>
          <span class="btn btn-info d-block" (click)="save()" [class.not-events]="customerIsInvalid()">Guardar</span>
        </div>
      </div>
    </div>
  `
})
export class CustomerVoucherComponent {
  isLoadingResults: boolean = false;
  @Input() customer: any;

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal,
    private saleService: SaleService
  ) { }

  selectVoucherType(type: string): void {
    if (this.customer.type === type) {
      this.customer.type = null;
      this.removeCustomer();
    } else {
      this.customer.type = type;
    }
  }

  searchUser(): void {
    if (this.customer.type === 'BOLETA') {
      if (this.customer.document_number.length !== 8) {
        const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenterIndex1);
        modalRef.componentInstance.message = 'El DNI debe tener 8 digitos.';
        return;
      }
    } else if (this.customer.type === 'FACTURA') {
      if (this.customer.document_number.length !== 11) {
        const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenterIndex1);
        modalRef.componentInstance.message = 'El RUC debe tener 11 digitos.';
        return;
      }
    }

    const params = {
      document_type: this.customer.type === 'BOLETA' ? 'DNI' : 'RUC',
      document_number: this.customer.document_number
    };

    this.isLoadingResults = true;
    this.saleService.getCustomer(params)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe((response) => {
          this.customer.searched = true;

          this.customer = Object.assign(this.customer, response.data);
      });
  }

  removeCustomer(): void {
    this.customer = {
      type: this.customer.type,
      document_type: null,
      document_number: null,
      name: null,
      address: null,
      email: null,
      phone: null,
      searched: false
    };
  }

  customerIsInvalid() {
    if (this.customer.type === 'BOLETA') {
      return !(this.customer.document_number && this.customer.document_number.length === 8 && this.customer.name);
    } else if (this.customer.type === 'FACTURA') {
      return !(this.customer.document_number && this.customer.document_number.length === 11 && this.customer.name && this.customer.address);
    }

    return true;
  }

  save(): void {
    this.activeModal.close(this.customer);
  }
}
