import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { SuccsessModalComponent, WarnModalComponent } from 'src/app/shared/helpers/modals/alerts.component';
import Utils from 'src/app/shared/helpers/utils';
import { Category } from 'src/app/admin/models/category.model';
import { Customer } from 'src/app/admin/models/customer.model';
import { Product, ProductFilter } from 'src/app/admin/models/product.model';
import { SaleRecord } from 'src/app/admin/models/sale-record.model';
import { CategoryService } from 'src/app/admin/services/category.service';
import { ProductService } from 'src/app/admin/services/product.service';
import { SaleService } from 'src/app/admin/services/sale.service';
import { CustomerVoucherComponent } from '../customer-voucher/customer-voucher.component';

@Component({
  selector: 'app-point-of-sale',
  templateUrl: './point-of-sale.component.html',
})
export class PointOfSaleComponent implements OnInit {
  isLoadingResults = true;
  showPanel = false;
  products: Product[] = [];
  productFilter: ProductFilter = {
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
  taxes_included = false;

  sale: SaleRecord = this.initialSale();

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private ngbModal: NgbModal,
    private saleService: SaleService
  ) { }

  showPanelToggle(): void {
    this.showPanel = !this.showPanel;
  }

  listCategories(): void {
    this.categoryService.getAll()
    .subscribe((response) => {
      this.categories = this.categories.concat(response.data.items);
    });
  }

  categorySelected(category: Category): void {
    this.categories.forEach((c) => {
      c.selected = c.id === category.id;
    });

    this.productFilter.category_id = category.id ?? null;

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
        // this.taxes_included = response.data.taxes_included === 1;
        this.taxes_included = true;
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

  sum(product: Product): void {
    if (product.quantity_sale && product.quantity) {
      if (product.quantity_sale > product.quantity) {
        const modalRef = this.ngbModal.open(WarnModalComponent, Utils.modalCenter);
        modalRef.componentInstance.message = 'Se alcanzo el limite de stock del producto.';
      } else {
        product.quantity_sale++;
      }

      this.refreshSaleAmount();
    }
  }

  minus(product: Product): void {
    if (product.quantity_sale) {
      product.quantity_sale--;

      if (product.quantity_sale === 0) {
        this.remove(product);
      }

      this.refreshSaleAmount();
    }
  }

  remove(product: Product): void {
    const index = this.getProductIndex(product);

    this.sale.products.splice(index, 1);

    this.refreshSaleAmount();
  }

  refreshSaleAmount(): void {
    this.sale.products.forEach(product => {
      if (product.quantity_sale && product.price) {
        product.subtotal = product.quantity_sale * product.price;
      }
    });

    if (this.taxes_included) {
      this.sale.total = this.sale.products.reduce((previousValue: number, currentValue: any) => previousValue + (currentValue.quantity_sale * currentValue.price), 0);

      this.sale.subtotal = this.sale.total * 0.82;
      this.sale.igv = this.sale.total * 0.18;
    }
  }

  getProductIndex(product: Product) {
    return this.sale.products.findIndex(p => p.id === product.id);
  }

  setCustomer(): void {
    const modalRef = this.ngbModal.open(CustomerVoucherComponent, Utils.modalIndex1);

    modalRef.componentInstance.customer = { ...this.sale.customer };

    modalRef.result
      .then((customer: Customer) => this.sale.customer = customer, Utils.none);
  }

  removeCustomer(): void {
    this.sale.customer = {
      document_type: null,
      document_number: null,
      name: '',
      state: 1,
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

  initialSale(): SaleRecord {
    return {
      subtotal: 0.00,
      discount: 0.00,
      igv: 0.00,
      total: 0.00,
      products: [],
      customer: {
        document_type: null,
        document_number: null,
        name: '',
        state: 1,
        searched: false
      }
    };
  }

  ngOnInit(): void {
    this.listCategories();
    this.list();
  }
}
