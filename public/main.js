"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 1468:
/*!**************************************************!*\
  !*** ./src/app/admin/brands/brands.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandsComponent": () => (/* binding */ BrandsComponent),
/* harmony export */   "BrandsStoreOrUpdateComponent": () => (/* binding */ BrandsStoreOrUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/table.util */ 6963);
/* harmony import */ var src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/http.util */ 2888);
/* harmony import */ var src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/utils */ 8110);
/* harmony import */ var src_app_models_brand_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/brand.model */ 9753);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/modals.component */ 3199);
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../companies/companies.component */ 2687);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/brand.service */ 7744);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/spinner.component */ 3812);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search/search.component */ 6454);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 587);





















function BrandsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrandsComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r11.activeModal.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsComponent_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "spinner");
} }
function BrandsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsComponent_td_17_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](brand_r13.company.name);
} }
function BrandsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, BrandsComponent_td_17_h6_2_Template, 2, 1, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("line-height-1", brand_r13.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", brand_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", brand_r13.company);
} }
function BrandsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](brand_r16.state_name);
} }
function BrandsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsComponent_td_23_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrandsComponent_td_23_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const brand_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r20.createOrEdit(brand_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsComponent_td_23_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrandsComponent_td_23_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25); const brand_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r23.add(brand_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BrandsComponent_td_23_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, BrandsComponent_td_23_span_2_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r7.isModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.isModal);
} }
function BrandsComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 35);
} }
function BrandsComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 36);
} }
function BrandsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No se encontraron resultados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25]; };
function BrandsStoreOrUpdateComponent_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "spinner");
} }
function BrandsStoreOrUpdateComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Creaci\u00F3n de nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsStoreOrUpdateComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edici\u00F3n de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsStoreOrUpdateComponent_div_10_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "-Empresa autenticada-");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BrandsStoreOrUpdateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Empresa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrandsStoreOrUpdateComponent_div_10_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r5.searchCompany(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Cambiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, BrandsStoreOrUpdateComponent_div_10_label_9_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.brand.company == null ? null : ctx_r3.brand.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r3.brand.company);
} }
class BrandsComponent {
    constructor(brandService, ngbModal, activeModal) {
        this.brandService = brandService;
        this.ngbModal = ngbModal;
        this.activeModal = activeModal;
        this.isModal = false;
        this.displayedColumns = ['name', 'state_name', 'actions'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.brands = [];
        this.tableFilter = new src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__.TableFilter();
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.firstPage()));
        this.tableFilter.startWith(this.sort, this.paginator);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.sort.sortChange, this.paginator.page, this.tableFilter.filter.search)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
            this.isLoadingResults = true;
            return this.brandService.getAll(this.tableFilter.params())
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__["default"].paginationCatchError));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((response) => {
            this.isLoadingResults = false;
            this.resultsLength = response.data.total;
            return response.data.items;
        }))
            .subscribe(data => (this.brands = data));
    }
    createOrEdit(brand) {
        const modalRef = this.ngbModal.open(BrandsStoreOrUpdateComponent, { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' });
        if (brand) {
            modalRef.componentInstance.brand = Object.assign({}, brand);
        }
        modalRef.result
            .then(() => this.tableFilter.filter.search.emit(), src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
    add(brand) {
        this.activeModal.close(brand);
    }
}
BrandsComponent.ɵfac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_7__.BrandService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal)); };
BrandsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: BrandsComponent, selectors: [["app-brands"]], viewQuery: function BrandsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { isModal: "isModal" }, decls: 28, vars: 11, consts: [[1, "row"], [1, "col-12"], [1, "card", "mb-0"], [1, "card-header"], [1, "card-title"], ["class", "btn-close-2", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "card-text"], [1, "position-relative"], [4, "ngIf"], [3, "createButton", "searchTerm", "create"], [1, "table-responsive"], ["cdk-table", "", "matSort", "", "matSortActive", "name", "matSortDisableClear", "", "matSortDirection", "asc", "multiTemplateDataRows", "", 1, "table", "table-hover", "mb-0", 3, "dataSource"], ["cdkColumnDef", "name"], ["cdk-header-cell", "", "mat-sort-header", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "line-height-1", 4, "cdkCellDef"], ["cdkColumnDef", "state_name"], ["cdk-header-cell", "", "class", "text-center w100", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "text-center", 4, "cdkCellDef"], ["cdkColumnDef", "actions"], ["cdk-header-row", "", "class", "bg-light", 4, "cdkHeaderRowDef"], ["cdk-row", "", "class", "row-border-bottom-0", 4, "cdkRowDef", "cdkRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], [1, "btn-close-2", 3, "click"], ["cdk-header-cell", "", "mat-sort-header", ""], ["cdk-cell", ""], ["class", "d-block m-0", 4, "ngIf"], [1, "d-block", "m-0"], ["cdk-header-cell", "", 1, "text-center", "w100"], ["cdk-cell", "", 1, "text-center"], ["class", "text-info pointer", 3, "click", 4, "ngIf"], ["class", "text-success pointer", 3, "click", 4, "ngIf"], [1, "text-info", "pointer", 3, "click"], [1, "text-success", "pointer", 3, "click"], ["cdk-header-row", "", 1, "bg-light"], ["cdk-row", "", 1, "row-border-bottom-0"], [1, "text-center", "my-3"]], template: function BrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Marcas");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, BrandsComponent_span_6_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6)(8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Listado de marcas");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, BrandsComponent_spinner_11_Template, 1, 0, "spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "search", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("searchTerm", function BrandsComponent_Template_search_searchTerm_12_listener($event) { return ctx.tableFilter.filter.search.emit($event); })("create", function BrandsComponent_Template_search_create_12_listener() { return ctx.createOrEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11)(14, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](15, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, BrandsComponent_th_16_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, BrandsComponent_td_17_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](18, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, BrandsComponent_th_19_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, BrandsComponent_td_20_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](21, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, BrandsComponent_th_22_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, BrandsComponent_td_23_Template, 3, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, BrandsComponent_tr_24_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, BrandsComponent_tr_25_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, BrandsComponent_div_26_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "mat-paginator", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("createButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.brands);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.brands.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_9__.SearchComponent, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkColumnDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkCell, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderRow, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator], encapsulation: 2 });
class BrandsStoreOrUpdateComponent {
    constructor(activeModal, brandService, ngbModal) {
        this.activeModal = activeModal;
        this.brandService = brandService;
        this.ngbModal = ngbModal;
        this.brand = {
            name: '',
            state: 1
        };
        this.isLoadingResults = false;
        this.isSuper = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.isSuper;
    }
    save() {
        this.isLoadingResults = true;
        const data = src_app_models_brand_model__WEBPACK_IMPORTED_MODULE_3__["default"].data(this.brand);
        const service = !this.brand.id ? this.brandService.store(data) : this.brandService.update(data);
        service
            .subscribe(response => {
            const modalRef = this.ngbModal.open(_modals_modals_component__WEBPACK_IMPORTED_MODULE_4__.SuccsessModalComponent, { centered: true });
            modalRef.componentInstance.message = response.message;
            this.isLoadingResults = true;
            this.activeModal.close();
        }, () => this.isLoadingResults = false);
    }
    searchCompany() {
        const modalRef = this.ngbModal.open(_companies_companies_component__WEBPACK_IMPORTED_MODULE_5__.CompaniesComponent, { size: 'xl', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' });
        modalRef.componentInstance.isModal = true;
        modalRef.result.then((company) => {
            this.brand.company = company;
            this.brand.company_id = company.id;
        }, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
}
BrandsStoreOrUpdateComponent.ɵfac = function BrandsStoreOrUpdateComponent_Factory(t) { return new (t || BrandsStoreOrUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_7__.BrandService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal)); };
BrandsStoreOrUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: BrandsStoreOrUpdateComponent, selectors: [["app-card-warn"]], inputs: { brand: "brand" }, decls: 34, vars: 9, consts: [[4, "ngIf"], [1, "card", "m-0"], [1, "card-header", "bg-light"], [1, "card-title"], [1, "btn-close-2", 3, "click"], [1, "card-body"], [1, "form-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "mb-3"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], [1, "control-label"], [1, "form-check"], ["type", "radio", "name", "brand-state", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "state-active", 1, "form-check-label"], ["for", "state-inactive", 1, "form-check-label"], [1, "btn", "btn-info", 3, "click"], [1, "text-sm", "font-medium", "text-muted", "pointer", "ml-15", 3, "click"], [1, "d-block"], ["class", "d-block", 4, "ngIf"]], template: function BrandsStoreOrUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, BrandsStoreOrUpdateComponent_spinner_0_Template, 1, 0, "spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, BrandsStoreOrUpdateComponent_span_4_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, BrandsStoreOrUpdateComponent_span_5_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " marca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrandsStoreOrUpdateComponent_Template_span_click_7_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, BrandsStoreOrUpdateComponent_div_10_Template, 10, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrandsStoreOrUpdateComponent_Template_input_ngModelChange_16_listener($event) { return ctx.brand.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 8)(18, "div", 13)(19, "div", 10)(20, "div", 10)(21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 15)(24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrandsStoreOrUpdateComponent_Template_input_ngModelChange_24_listener($event) { return ctx.brand.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 15)(28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrandsStoreOrUpdateComponent_Template_input_ngModelChange_28_listener($event) { return ctx.brand.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Inactivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrandsStoreOrUpdateComponent_Template_span_click_32_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.brand.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.brand.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isSuper);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.brand.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 1)("ngModel", ctx.brand.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 0)("ngModel", ctx.brand.state);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RadioControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 2687:
/*!********************************************************!*\
  !*** ./src/app/admin/companies/companies.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesComponent": () => (/* binding */ CompaniesComponent),
/* harmony export */   "CompaniesStoreOrUpdateComponent": () => (/* binding */ CompaniesStoreOrUpdateComponent),
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/table.util */ 6963);
/* harmony import */ var src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/http.util */ 2888);
/* harmony import */ var src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/utils */ 8110);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/modals.component */ 3199);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/company.service */ 6196);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/spinner.component */ 3812);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.component */ 6454);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 587);




















function CompaniesComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r15.activeModal.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "spinner");
} }
function CompaniesComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "RUC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](provider_r17.ruc);
} }
function CompaniesComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_td_20_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](provider_r18.company.name);
} }
function CompaniesComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CompaniesComponent_td_20_h6_2_Template, 2, 1, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", provider_r18.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", provider_r18.company);
} }
function CompaniesComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](provider_r21.address);
} }
function CompaniesComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](provider_r22.state_name);
} }
function CompaniesComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_td_29_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesComponent_td_29_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const provider_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.createOrEdit(provider_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_td_29_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesComponent_td_29_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const provider_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r29.add(provider_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CompaniesComponent_td_29_span_1_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CompaniesComponent_td_29_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r11.isModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.isModal);
} }
function CompaniesComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 41);
} }
function CompaniesComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 42);
} }
function CompaniesComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No se encontraron resultados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25]; };
function CompaniesStoreOrUpdateComponent_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "spinner");
} }
function CompaniesStoreOrUpdateComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Creaci\u00F3n de nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompaniesStoreOrUpdateComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Edici\u00F3n de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class CompaniesComponent {
    constructor(companyService, ngbModal, activeModal) {
        this.companyService = companyService;
        this.ngbModal = ngbModal;
        this.activeModal = activeModal;
        this.isModal = false;
        this.displayedColumns = ['ruc', 'name', 'address', 'state_name', 'actions'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.companies = [];
        this.tableFilter = new src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__.TableFilter();
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.firstPage()));
        this.tableFilter.startWith(this.sort, this.paginator);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.sort.sortChange, this.paginator.page, this.tableFilter.filter.search)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => {
            this.isLoadingResults = true;
            return this.companyService.getAll(this.tableFilter.params())
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__["default"].paginationCatchError));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)((response) => {
            this.isLoadingResults = false;
            this.resultsLength = response.data.total;
            return response.data.items;
        }))
            .subscribe(data => (this.companies = data));
    }
    createOrEdit(company) {
        const modalRef = this.ngbModal.open(CompaniesStoreOrUpdateComponent, { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' });
        if (company) {
            modalRef.componentInstance.company = Object.assign({}, company);
        }
        modalRef.result
            .then(() => this.tableFilter.filter.search.emit(), src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
    add(company) {
        this.activeModal.close(company);
    }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbActiveModal)); };
CompaniesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["app-companies"]], viewQuery: function CompaniesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { isModal: "isModal" }, decls: 34, vars: 11, consts: [[1, "row"], [1, "col-12"], [1, "card", "mb-0"], [1, "card-header"], [1, "card-title"], ["class", "btn-close-2", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "card-text"], [1, "position-relative"], [4, "ngIf"], [3, "createButton", "searchTerm", "create"], [1, "table-responsive"], ["cdk-table", "", "matSort", "", "matSortActive", "name", "matSortDisableClear", "", "matSortDirection", "asc", "multiTemplateDataRows", "", 1, "table", "table-hover", "mb-0", 3, "dataSource"], ["cdkColumnDef", "ruc"], ["cdk-header-cell", "", "class", "text-center w130", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "text-center", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdk-header-cell", "", "mat-sort-header", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "address"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdkColumnDef", "state_name"], ["cdk-header-cell", "", "class", "text-center w100", 4, "cdkHeaderCellDef"], ["cdkColumnDef", "actions"], ["cdk-header-row", "", "class", "bg-light", 4, "cdkHeaderRowDef"], ["cdk-row", "", "class", "row-border-bottom-0", 4, "cdkRowDef", "cdkRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], [1, "btn-close-2", 3, "click"], ["cdk-header-cell", "", 1, "text-center", "w130"], ["cdk-cell", "", 1, "text-center"], ["cdk-header-cell", "", "mat-sort-header", ""], ["cdk-cell", ""], ["class", "d-block mb-0 mt-1", 4, "ngIf"], [1, "d-block", "mb-0", "mt-1"], ["cdk-header-cell", ""], ["cdk-header-cell", "", 1, "text-center", "w100"], ["class", "text-info pointer", 3, "click", 4, "ngIf"], ["class", "text-success pointer", 3, "click", 4, "ngIf"], [1, "text-info", "pointer", 3, "click"], [1, "text-success", "pointer", 3, "click"], ["cdk-header-row", "", 1, "bg-light"], ["cdk-row", "", 1, "row-border-bottom-0"], [1, "text-center", "my-3"]], template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CompaniesComponent_span_6_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6)(8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Listado de empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CompaniesComponent_spinner_11_Template, 1, 0, "spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "search", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("searchTerm", function CompaniesComponent_Template_search_searchTerm_12_listener($event) { return ctx.tableFilter.filter.search.emit($event); })("create", function CompaniesComponent_Template_search_create_12_listener() { return ctx.createOrEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 11)(14, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CompaniesComponent_th_16_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CompaniesComponent_td_17_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](18, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, CompaniesComponent_th_19_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, CompaniesComponent_td_20_Template, 3, 2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](21, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CompaniesComponent_th_22_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CompaniesComponent_td_23_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](24, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CompaniesComponent_th_25_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CompaniesComponent_td_26_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](27, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, CompaniesComponent_th_28_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, CompaniesComponent_td_29_Template, 3, 2, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CompaniesComponent_tr_30_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CompaniesComponent_tr_31_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, CompaniesComponent_div_32_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "mat-paginator", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("createButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.companies.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_6__.SearchComponent, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkColumnDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkHeaderCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkHeaderCell, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkHeaderRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkHeaderRow, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__.CdkRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator], encapsulation: 2 });
class SearchComponent {
    constructor(companyService) {
        this.companyService = companyService;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.searching = false;
        this.formatter = (result) => result.name;
        this.search = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)((term) => {
            this.searching = true;
            const data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpParams().set('search', term);
            return this.companyService.getAll(data)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__["default"].paginationCatchError));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(response => {
            this.searching = false;
            return response.data.items;
        }));
    }
    selectItem(event) {
        event.preventDefault();
        if (event.item)
            this.select.emit(event.item);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["company-search"]], outputs: { select: "select" }, decls: 1, vars: 5, consts: [["type", "text", "placeholder", "Buscar nueva empresa", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultFormatter", "ngModelChange", "selectItem"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.model = $event; })("selectItem", function SearchComponent_Template_input_selectItem_0_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("not-events", ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultFormatter", ctx.formatter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTypeahead, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel], encapsulation: 2 });
class CompaniesStoreOrUpdateComponent {
    constructor(activeModal, companyService, ngbModal) {
        this.activeModal = activeModal;
        this.companyService = companyService;
        this.ngbModal = ngbModal;
        this.company = {
            ruc: '',
            name: '',
            address: '',
            website: '',
            state: 1
        };
        this.isLoadingResults = false;
    }
    save() {
        this.isLoadingResults = true;
        const service = !this.company.id ? this.companyService.store(this.company) : this.companyService.update(this.company);
        service
            .subscribe(response => {
            const modalRef = this.ngbModal.open(_modals_modals_component__WEBPACK_IMPORTED_MODULE_3__.SuccsessModalComponent, { centered: true });
            modalRef.componentInstance.message = response.message;
            this.isLoadingResults = true;
            this.activeModal.close();
        }, () => this.isLoadingResults = false);
    }
}
CompaniesStoreOrUpdateComponent.ɵfac = function CompaniesStoreOrUpdateComponent_Factory(t) { return new (t || CompaniesStoreOrUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal)); };
CompaniesStoreOrUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CompaniesStoreOrUpdateComponent, selectors: [["app-card-warn"]], inputs: { company: "company" }, decls: 50, vars: 11, consts: [[4, "ngIf"], [1, "card", "m-0"], [1, "card-header", "bg-light"], [1, "card-title"], [1, "btn-close-2", 3, "click"], [1, "card-body"], [1, "form-body"], [1, "row"], [1, "col-12"], [1, "mb-3"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "address"], ["type", "text", "name", "address", "placeholder", "Direcci\u00F3n", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], ["for", "code", 1, "control-label"], ["type", "text", "name", "code", "placeholder", "C\u00F3digo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "control-label"], [1, "form-check"], ["type", "radio", "name", "company-state", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "state-active", 1, "form-check-label"], ["for", "state-inactive", 1, "form-check-label"], ["for", "website"], ["type", "text", "name", "website", "placeholder", "Sitio web", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", 3, "click"]], template: function CompaniesStoreOrUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CompaniesStoreOrUpdateComponent_spinner_0_Template, 1, 0, "spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CompaniesStoreOrUpdateComponent_span_4_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CompaniesStoreOrUpdateComponent_span_5_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " proveedor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesStoreOrUpdateComponent_Template_span_click_7_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CompaniesStoreOrUpdateComponent_Template_input_ngModelChange_15_listener($event) { return ctx.company.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CompaniesStoreOrUpdateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.company.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 7)(23, "div", 14)(24, "div", 9)(25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "RUC");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CompaniesStoreOrUpdateComponent_Template_input_ngModelChange_27_listener($event) { return ctx.company.ruc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 14)(29, "div", 9)(30, "div", 9)(31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 18)(34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CompaniesStoreOrUpdateComponent_Template_input_ngModelChange_34_listener($event) { return ctx.company.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 18)(38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CompaniesStoreOrUpdateComponent_Template_input_ngModelChange_38_listener($event) { return ctx.company.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Inactivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 7)(42, "div", 8)(43, "div", 9)(44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Sitio web");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CompaniesStoreOrUpdateComponent_Template_input_ngModelChange_46_listener($event) { return ctx.company.website = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompaniesStoreOrUpdateComponent_Template_span_click_48_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.company.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.company.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.company.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.company.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.company.ruc);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 1)("ngModel", ctx.company.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 0)("ngModel", ctx.company.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.company.website);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RadioControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 3359:
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_auth_service___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service. */ 4045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);






function LoginComponent_ngb_alert_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "danger")("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = {
            nick: "",
            password: "",
            device_name: "web-app",
            remenber: false,
        };
        this.errorMessage = '';
        this.isLoadingResults = false;
    }
    login() {
        this.errorMessage = '';
        this.isLoadingResults = true;
        this.authService.login(this.user)
            .subscribe(response => {
            const [CsrfResponse, AuthResponse] = response;
            this.authService.setToken(AuthResponse.token);
            this.authService.setUser(JSON.stringify(AuthResponse.data));
            this.router.navigate(['/productos']);
        }, response => {
            this.isLoadingResults = false;
            this.errorMessage = response.error.message;
        });
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service___WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 6, consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center"], [1, "auth-box"], [1, "card", "m-0"], ["src", "https://images.unsplash.com/photo-1556740714-a8395b3bf30f", "alt", "Card", 1, "card-img-top", "img-responsive"], [1, "card-body", "form-material"], [1, "row"], [1, "col-12"], [1, "mb-3"], ["type", "text", "name", "nick", "required", "", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "required", "", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange", "enter"], [1, "checkbox-group"], ["type", "checkbox", 3, "checked"], [1, "checkmark"], [1, "mb-2"], [3, "type", "dismissible", 4, "ngIf"], [1, "btn", "btn-info", "d-block", "w-100", "waves-effect", "waves-light", 3, "click"], [3, "type", "dismissible"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.nick = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.password = $event; })("enter", function LoginComponent_Template_input_enter_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "div", 6)(15, "div", 7)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11)(18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Recordarme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5)(22, "div", 6)(23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_ngb_alert_24_Template, 2, 3, "ngb-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5)(26, "div", 6)(27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_27_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.nick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.user.remenber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("not-events", ctx.isLoadingResults);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAlert], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3199:
/*!**************************************************!*\
  !*** ./src/app/admin/modals/modals.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccsessModalComponent": () => (/* binding */ SuccsessModalComponent),
/* harmony export */   "WarnModalComponent": () => (/* binding */ WarnModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);


class WarnModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.message = '';
    }
}
WarnModalComponent.ɵfac = function WarnModalComponent_Factory(t) { return new (t || WarnModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
WarnModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarnModalComponent, selectors: [["app-card-warn"]], inputs: { message: "message" }, decls: 10, vars: 1, consts: [[1, "card", "m-0"], [1, "card-body"], [1, "card-title", "m-0", "text-center", "text-warning"], [1, "text-center", "m-0"], [1, "card-footer", "text-center"], [1, "btn", "btn-warning", 3, "click"]], template: function WarnModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Advertencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarnModalComponent_Template_span_click_8_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });
class SuccsessModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.message = '';
    }
}
SuccsessModalComponent.ɵfac = function SuccsessModalComponent_Factory(t) { return new (t || SuccsessModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
SuccsessModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccsessModalComponent, selectors: [["app-card-success"]], inputs: { message: "message" }, decls: 10, vars: 1, consts: [[1, "card", "m-0"], [1, "card-body"], [1, "card-title", "m-0", "text-center", "text-success"], [1, "text-center", "m-0"], [1, "card-footer", "text-center"], [1, "btn", "btn-success", 3, "click"]], template: function SuccsessModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccsessModalComponent_Template_span_click_8_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, encapsulation: 2 });


/***/ }),

/***/ 575:
/*!******************************************************!*\
  !*** ./src/app/admin/products/products.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStoreOrUpdateComponent": () => (/* binding */ ProductStoreOrUpdateComponent),
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/table.util */ 6963);
/* harmony import */ var src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/http.util */ 2888);
/* harmony import */ var src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/utils */ 8110);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/modals.component */ 3199);
/* harmony import */ var src_app_models_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/product.model */ 1454);
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/providers.component */ 7944);
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../brands/brands.component */ 1468);
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../companies/companies.component */ 2687);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/spinner.component */ 3812);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.component */ 6454);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 587);
























function ProductsComponent_spinner_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "spinner");
} }
function ProductsComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r24.code);
} }
function ProductsComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_19_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r25.company.name);
} }
function ProductsComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ProductsComponent_td_19_h6_2_Template, 2, 1, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", product_r25.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", product_r25.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r25.brand.name);
} }
function ProductsComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r28.quantity);
} }
function ProductsComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Unidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r29.unit.name);
} }
function ProductsComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Precio x Unidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r30.price);
} }
function ProductsComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Precio x Mayor");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r31.higher_price);
} }
function ProductsComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Precio Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r32.average_price);
} }
function ProductsComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r33.state_name);
} }
function ProductsComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductsComponent_td_40_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36); const product_r34 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r35.createOrEdit(product_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProductsComponent_td_42_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52)(1, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const provider_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](provider_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](provider_r39.ruc);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](provider_r39.address);
} }
function ProductsComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 48)(1, "div", 49)(2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ProductsComponent_td_42_div_3_Template, 7, 3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r37 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", ctx_r19.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@detailExpand", product_r37 == ctx_r19.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", product_r37.providers);
} }
function ProductsComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 55);
} }
function ProductsComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductsComponent_tr_44_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42); const product_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r41.expandedElement = ctx_r41.expandedElement === product_r40 ? null : product_r40; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductsComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 57);
} }
function ProductsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No se encontraron resultados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["expandedDetail"]; };
const _c1 = function () { return [5, 10, 25]; };
function ProductStoreOrUpdateComponent_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "spinner");
} }
function ProductStoreOrUpdateComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Creaci\u00F3n de nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductStoreOrUpdateComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Edici\u00F3n de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductStoreOrUpdateComponent_div_10_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-Empresa autenticada-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductStoreOrUpdateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Empresa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductStoreOrUpdateComponent_div_10_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r8.searchCompany(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Cambiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ProductStoreOrUpdateComponent_div_10_label_9_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.product.company == null ? null : ctx_r3.product.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.product.company);
} }
function ProductStoreOrUpdateComponent_label_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "-No asignado-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ProductStoreOrUpdateComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td", 31)(4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductStoreOrUpdateComponent_tr_63_Template_span_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const provider_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r11.del(provider_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const provider_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](provider_r10.name);
} }
function ProductStoreOrUpdateComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Sin registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
class ProductsComponent {
    constructor(productService, ngbModal) {
        this.productService = productService;
        this.ngbModal = ngbModal;
        this.displayedColumns = ['code', 'name', 'quantity', 'unit', 'price', 'higher_price', 'average_price', 'state_name', 'actions'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.expandedElement = null;
        this.products = [];
        this.tableFilter = new src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__.TableFilter();
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.firstPage()));
        this.tableFilter.startWith(this.sort, this.paginator);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(this.sort.sortChange, this.paginator.page, this.tableFilter.filter.search)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(() => {
            this.isLoadingResults = true;
            return this.productService.getAll(this.tableFilter.params())
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__["default"].paginationCatchError));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)((response) => {
            this.isLoadingResults = false;
            this.resultsLength = response.data.total;
            return response.data.items;
        }))
            .subscribe(data => (this.products = data));
    }
    createOrEdit(product) {
        const modalRef = this.ngbModal.open(ProductStoreOrUpdateComponent);
        if (product) {
            modalRef.componentInstance.product = src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replicate(product);
        }
        modalRef.result.then(() => this.tableFilter.filter.search.emit(), src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
    applyFilter(event) { }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], viewQuery: function ProductsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 48, vars: 12, consts: [[1, "row"], [1, "col-12"], [1, "card", "mb-0"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "position-relative"], [4, "ngIf"], [3, "createButton", "searchTerm", "create"], [1, "table-responsive"], ["cdk-table", "", "matSort", "", "matSortActive", "name", "matSortDisableClear", "", "matSortDirection", "asc", "multiTemplateDataRows", "", 1, "table", "table-hover", "mb-0", 3, "dataSource"], ["cdkColumnDef", "code"], ["cdk-header-cell", "", "class", "text-center w100", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "text-center", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdk-header-cell", "", "mat-sort-header", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "line-height-1", 4, "cdkCellDef"], ["cdkColumnDef", "quantity"], ["cdk-header-cell", "", "mat-sort-header", "", "class", "text-right w100", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "text-right", 4, "cdkCellDef"], ["cdkColumnDef", "unit"], ["cdk-header-cell", "", "class", "text-center w80", 4, "cdkHeaderCellDef"], ["cdkColumnDef", "price"], ["cdk-header-cell", "", "class", "text-right w100", 4, "cdkHeaderCellDef"], ["cdkColumnDef", "higher_price"], ["cdkColumnDef", "average_price"], ["cdkColumnDef", "state_name"], ["cdkColumnDef", "actions"], ["cdkColumnDef", "expandedDetail"], ["class", "height-0 p-0", "cdk-cell", "", 4, "cdkCellDef"], ["cdk-header-row", "", "class", "bg-light", 4, "cdkHeaderRowDef"], ["cdk-row", "", "class", "row-border-bottom-0", 3, "click", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], ["cdk-header-cell", "", 1, "text-center", "w100"], ["cdk-cell", "", 1, "text-center"], ["cdk-header-cell", "", "mat-sort-header", ""], ["cdk-cell", "", 1, "line-height-1"], ["class", "d-block m-0 float-end", 4, "ngIf"], [1, "d-block", "m-0", "text-muted"], [1, "d-block", "m-0", "float-end"], ["cdk-header-cell", "", "mat-sort-header", "", 1, "text-right", "w100"], ["cdk-cell", "", 1, "text-right"], ["cdk-header-cell", "", 1, "text-center", "w80"], ["cdk-header-cell", "", 1, "text-right", "w100"], [1, "text-info", "pointer", 3, "click"], ["cdk-cell", "", 1, "height-0", "p-0"], [1, "overflow-hidden"], [1, "d-flex", "flex-flow-wrap"], ["class", "border m-2 p-2", 4, "ngFor", "ngForOf"], [1, "border", "m-2", "p-2"], [1, "font-medium", "mb-0"], [1, "d-block", "text-muted"], ["cdk-header-row", "", 1, "bg-light"], ["cdk-row", "", 1, "row-border-bottom-0", 3, "click"], ["cdk-row", ""], [1, "text-center", "my-3"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Listado de productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ProductsComponent_spinner_10_Template, 1, 0, "spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "search", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("searchTerm", function ProductsComponent_Template_search_searchTerm_11_listener($event) { return ctx.tableFilter.filter.search.emit($event); })("create", function ProductsComponent_Template_search_create_11_listener() { return ctx.createOrEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 10)(13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ProductsComponent_th_15_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ProductsComponent_td_16_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ProductsComponent_th_18_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ProductsComponent_td_19_Template, 5, 3, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](20, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, ProductsComponent_th_21_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, ProductsComponent_td_22_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](23, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, ProductsComponent_th_24_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ProductsComponent_td_25_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](26, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, ProductsComponent_th_27_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, ProductsComponent_td_28_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](29, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, ProductsComponent_th_30_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ProductsComponent_td_31_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](32, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, ProductsComponent_th_33_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, ProductsComponent_td_34_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](35, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, ProductsComponent_th_36_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, ProductsComponent_td_37_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](38, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, ProductsComponent_th_39_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, ProductsComponent_td_40_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](41, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, ProductsComponent_td_42_Template, 4, 3, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, ProductsComponent_tr_43_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, ProductsComponent_tr_44_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, ProductsComponent_tr_45_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, ProductsComponent_div_46_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "mat-paginator", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("createButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cdkRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](11, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_10__.SpinnerComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_11__.SearchComponent, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkColumnDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkHeaderCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkHeaderCell, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkHeaderRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkHeaderRow, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_22__.CdkRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
class ProductStoreOrUpdateComponent {
    constructor(activeModal, productService, ngbModal) {
        this.activeModal = activeModal;
        this.productService = productService;
        this.ngbModal = ngbModal;
        this.product = {
            code: '',
            name: '',
            state: 1,
            providers: []
        };
        this.isLoadingResults = false;
        this.showChangeCompany = false;
        this.isSuper = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.isSuper;
    }
    save() {
        this.isLoadingResults = true;
        const data = src_app_models_product_model__WEBPACK_IMPORTED_MODULE_4__["default"].data(this.product);
        const service = !this.product.id ? this.productService.store(data) : this.productService.update(data);
        service
            .subscribe(response => {
            const modalRef = this.ngbModal.open(_modals_modals_component__WEBPACK_IMPORTED_MODULE_3__.SuccsessModalComponent, { centered: true });
            modalRef.componentInstance.message = response.message;
            this.isLoadingResults = true;
            this.activeModal.close();
        }, () => this.isLoadingResults = false);
    }
    del(provider) {
        const index = this.product.providers.findIndex((parentProvider) => parentProvider.id === provider.id);
        this.product.providers.splice(index, 1);
    }
    searchProvider() {
        const modalRef = this.ngbModal.open(_providers_providers_component__WEBPACK_IMPORTED_MODULE_5__.ProvidersComponent, { size: 'xl', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' });
        modalRef.componentInstance.isModal = true;
        modalRef.result.then((provider) => {
            this.product.providers.push(provider);
        }, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
    searchBrand() {
        const modalRef = this.ngbModal.open(_brands_brands_component__WEBPACK_IMPORTED_MODULE_6__.BrandsComponent, { size: 'lg', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' });
        modalRef.componentInstance.isModal = true;
        modalRef.result.then((brand) => {
            this.product.brand = brand;
            this.product.brand_id = brand.id;
        }, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
    searchCompany() {
        const modalRef = this.ngbModal.open(_companies_companies_component__WEBPACK_IMPORTED_MODULE_7__.CompaniesComponent, { size: 'xl', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' });
        modalRef.componentInstance.isModal = true;
        modalRef.result.then((company) => {
            this.product.company = company;
            this.product.company_id = company.id;
        }, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
}
ProductStoreOrUpdateComponent.ɵfac = function ProductStoreOrUpdateComponent_Factory(t) { return new (t || ProductStoreOrUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal)); };
ProductStoreOrUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ProductStoreOrUpdateComponent, selectors: [["app-card-warn"]], inputs: { product: "product" }, decls: 68, vars: 14, consts: [[4, "ngIf"], [1, "card", "m-0"], [1, "card-header", "bg-light"], [1, "card-title"], [1, "btn-close-2", 3, "click"], [1, "card-body"], [1, "form-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "mb-3"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], ["for", "code", 1, "control-label"], ["type", "text", "name", "code", "placeholder", "C\u00F3digo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "control-label"], [1, "form-check"], ["type", "radio", "name", "product-state", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "state-active", 1, "form-check-label"], ["for", "state-inactive", 1, "form-check-label"], [1, "text-sm", "font-medium", "text-muted", "pointer", "ml-15", 3, "click"], [1, "d-block"], ["class", "d-block", 4, "ngIf"], [1, "align-items-center", "d-flex", "justify-content-sm-between", "mb-2"], [1, "text-sm", "font-medium", "text-muted", "pointer", 3, "click"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-sm", "mb-0"], [1, "text-center", "w80"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"], [1, "text-center"], [1, "text-danger", "pointer", 3, "click"], ["colspan", "2", 1, "text-center"]], template: function ProductStoreOrUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, ProductStoreOrUpdateComponent_spinner_0_Template, 1, 0, "spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ProductStoreOrUpdateComponent_span_4_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ProductStoreOrUpdateComponent_span_5_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductStoreOrUpdateComponent_Template_span_click_7_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ProductStoreOrUpdateComponent_div_10_Template, 10, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductStoreOrUpdateComponent_Template_input_ngModelChange_16_listener($event) { return ctx.product.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 8)(18, "div", 13)(19, "div", 10)(20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductStoreOrUpdateComponent_Template_input_ngModelChange_22_listener($event) { return ctx.product.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 13)(24, "div", 10)(25, "div", 10)(26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 17)(29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductStoreOrUpdateComponent_Template_input_ngModelChange_29_listener($event) { return ctx.product.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 17)(33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProductStoreOrUpdateComponent_Template_input_ngModelChange_33_listener($event) { return ctx.product.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Inactivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 8)(37, "div", 9)(38, "div", 10)(39, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "Marca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductStoreOrUpdateComponent_Template_span_click_41_listener() { return ctx.searchBrand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Cambiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, ProductStoreOrUpdateComponent_label_45_Template, 2, 0, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 8)(47, "div", 9)(48, "div", 10)(49, "div", 24)(50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "Proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductStoreOrUpdateComponent_Template_span_click_52_listener() { return ctx.searchProvider(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "Agregar proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 26)(55, "table", 27)(56, "thead")(57, "tr")(58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](63, ProductStoreOrUpdateComponent_tr_63_Template, 6, 1, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, ProductStoreOrUpdateComponent_tr_64_Template, 3, 0, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProductStoreOrUpdateComponent_Template_span_click_66_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isSuper);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.product.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", 1)("ngModel", ctx.product.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", 0)("ngModel", ctx.product.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.product.brand == null ? null : ctx.product.brand.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.product.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.product.providers);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.product.providers.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_10__.SpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.RadioControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 9046:
/*!****************************************************!*\
  !*** ./src/app/admin/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_profile_servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/profile.servise */ 1886);


class ProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.user = {
            id: null,
            company_id: null,
            nick: '',
            full_name: '',
            phone: '',
            email: '',
            role_name: '',
            image: '',
        };
    }
    ngOnInit() {
        this.profileService.getProfile()
            .subscribe(response => {
            this.user = response.data;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_profile_servise__WEBPACK_IMPORTED_MODULE_0__.ProfileService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 36, vars: 6, consts: [[1, "row"], [1, "col-lg-4", "col-xlg-3", "col-md-5"], [1, "card"], [1, "card-body"], [1, "text-center", "mt-4"], ["width", "150", 1, "rounded-circle", 3, "src"], [1, "card-title", "my-2"], [1, "card-subtitle"], [1, "text-muted"], [1, "text-muted", "pt-4", "db"], [1, "map-box"], ["width", "600", "height", "500", "id", "gmap_canvas", "src", "https://maps.google.com/maps?q=lima&t=&z=13&ie=UTF8&iwloc=&output=embed", "frameborder", "0", "scrolling", "no", "height", "150", "width", "100%", "allowfullscreen", "", 2, "border", "0"], [1, "btn", "btn-circle", "btn-secondary", "text-white", "m-1"], [1, "bi", "bi-facebook"], [1, "bi", "bi-twitter"], [1, "bi", "bi-youtube"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3)(13, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Social Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.role_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.address);
    } }, encapsulation: 2 });


/***/ }),

/***/ 7944:
/*!********************************************************!*\
  !*** ./src/app/admin/providers/providers.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderStoreOrUpdateComponent": () => (/* binding */ ProviderStoreOrUpdateComponent),
/* harmony export */   "ProvidersComponent": () => (/* binding */ ProvidersComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/table.util */ 6963);
/* harmony import */ var src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/http.util */ 2888);
/* harmony import */ var src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/utils */ 8110);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/modals.component */ 3199);
/* harmony import */ var src_app_models_provider_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/provider.model */ 6231);
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../companies/companies.component */ 2687);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/provider.service */ 5872);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/spinner.component */ 3812);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search/search.component */ 6454);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 587);





















function ProvidersComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProvidersComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r15.activeModal.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "spinner");
} }
function ProvidersComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "RUC");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](provider_r17.ruc);
} }
function ProvidersComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_td_20_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](provider_r18.company.name);
} }
function ProvidersComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProvidersComponent_td_20_h6_2_Template, 2, 1, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("line-height-1", provider_r18.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", provider_r18.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", provider_r18.company);
} }
function ProvidersComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](provider_r21.address);
} }
function ProvidersComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](provider_r22.state_name);
} }
function ProvidersComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_td_29_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProvidersComponent_td_29_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28); const provider_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r26.createOrEdit(provider_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_td_29_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProvidersComponent_td_29_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const provider_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r29.add(provider_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProvidersComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProvidersComponent_td_29_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProvidersComponent_td_29_span_2_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.isModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.isModal);
} }
function ProvidersComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 42);
} }
function ProvidersComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 43);
} }
function ProvidersComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No se encontraron resultados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25]; };
function ProviderStoreOrUpdateComponent_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "spinner");
} }
function ProviderStoreOrUpdateComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Creaci\u00F3n de nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProviderStoreOrUpdateComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edici\u00F3n de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProviderStoreOrUpdateComponent_div_10_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "-Empresa autenticada-");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProviderStoreOrUpdateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Empresa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProviderStoreOrUpdateComponent_div_10_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r5.searchCompany(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Cambiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ProviderStoreOrUpdateComponent_div_10_label_9_Template, 2, 0, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.provider.company == null ? null : ctx_r3.provider.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r3.provider.company);
} }
class ProvidersComponent {
    constructor(providerService, ngbModal, activeModal) {
        this.providerService = providerService;
        this.ngbModal = ngbModal;
        this.activeModal = activeModal;
        this.isModal = false;
        this.displayedColumns = ['ruc', 'name', 'address', 'state_name', 'actions'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.providers = [];
        this.tableFilter = new src_app_helpers_table_util__WEBPACK_IMPORTED_MODULE_0__.TableFilter();
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.firstPage()));
        this.tableFilter.startWith(this.sort, this.paginator);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.sort.sortChange, this.paginator.page, this.tableFilter.filter.search)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
            this.isLoadingResults = true;
            return this.providerService.getAll(this.tableFilter.params())
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(src_app_helpers_http_util__WEBPACK_IMPORTED_MODULE_1__["default"].paginationCatchError));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((response) => {
            this.isLoadingResults = false;
            this.resultsLength = response.data.total;
            return response.data.items;
        }))
            .subscribe(data => (this.providers = data));
    }
    createOrEdit(provider) {
        const modalRef = this.ngbModal.open(ProviderStoreOrUpdateComponent, { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' });
        if (provider) {
            modalRef.componentInstance.provider = Object.assign({}, provider);
        }
        modalRef.result
            .then(() => this.tableFilter.filter.search.emit(), src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
    add(provider) {
        this.activeModal.close(provider);
    }
}
ProvidersComponent.ɵfac = function ProvidersComponent_Factory(t) { return new (t || ProvidersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_7__.ProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal)); };
ProvidersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ProvidersComponent, selectors: [["app-providers"]], viewQuery: function ProvidersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { isModal: "isModal" }, decls: 34, vars: 11, consts: [[1, "row"], [1, "col-12"], [1, "card", "mb-0"], [1, "card-header"], [1, "card-title"], ["class", "btn-close-2", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "card-text"], [1, "position-relative"], [4, "ngIf"], [3, "createButton", "searchTerm", "create"], [1, "table-responsive"], ["cdk-table", "", "matSort", "", "matSortActive", "name", "matSortDisableClear", "", "matSortDirection", "asc", "multiTemplateDataRows", "", 1, "table", "table-hover", "mb-0", 3, "dataSource"], ["cdkColumnDef", "ruc"], ["cdk-header-cell", "", "class", "text-center w130", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "text-center", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdk-header-cell", "", "mat-sort-header", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "line-height-1", 4, "cdkCellDef"], ["cdkColumnDef", "address"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "state_name"], ["cdk-header-cell", "", "class", "text-center w100", 4, "cdkHeaderCellDef"], ["cdkColumnDef", "actions"], ["cdk-header-row", "", "class", "bg-light", 4, "cdkHeaderRowDef"], ["cdk-row", "", "class", "row-border-bottom-0", 4, "cdkRowDef", "cdkRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions"], [1, "btn-close-2", 3, "click"], ["cdk-header-cell", "", 1, "text-center", "w130"], ["cdk-cell", "", 1, "text-center"], ["cdk-header-cell", "", "mat-sort-header", ""], ["cdk-cell", ""], ["class", "d-block mb-0 mt-1", 4, "ngIf"], [1, "d-block", "mb-0", "mt-1"], ["cdk-header-cell", ""], ["cdk-header-cell", "", 1, "text-center", "w100"], ["class", "text-info pointer", 3, "click", 4, "ngIf"], ["class", "text-success pointer", 3, "click", 4, "ngIf"], [1, "text-info", "pointer", 3, "click"], [1, "text-success", "pointer", 3, "click"], ["cdk-header-row", "", 1, "bg-light"], ["cdk-row", "", 1, "row-border-bottom-0"], [1, "text-center", "my-3"]], template: function ProvidersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ProvidersComponent_span_6_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6)(8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Listado de proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ProvidersComponent_spinner_11_Template, 1, 0, "spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "search", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("searchTerm", function ProvidersComponent_Template_search_searchTerm_12_listener($event) { return ctx.tableFilter.filter.search.emit($event); })("create", function ProvidersComponent_Template_search_create_12_listener() { return ctx.createOrEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11)(14, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](15, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ProvidersComponent_th_16_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ProvidersComponent_td_17_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](18, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ProvidersComponent_th_19_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ProvidersComponent_td_20_Template, 3, 4, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](21, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ProvidersComponent_th_22_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, ProvidersComponent_td_23_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](24, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ProvidersComponent_th_25_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ProvidersComponent_td_26_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](27, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, ProvidersComponent_th_28_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ProvidersComponent_td_29_Template, 3, 2, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ProvidersComponent_tr_30_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, ProvidersComponent_tr_31_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, ProvidersComponent_div_32_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "mat-paginator", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("createButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.providers);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.providers.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_9__.SearchComponent, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkColumnDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderCell, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkHeaderRow, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator], encapsulation: 2 });
class ProviderStoreOrUpdateComponent {
    constructor(activeModal, providerService, ngbModal) {
        this.activeModal = activeModal;
        this.providerService = providerService;
        this.ngbModal = ngbModal;
        this.provider = {
            ruc: '',
            name: '',
            address: '',
            state: 1
        };
        this.isLoadingResults = false;
        this.isSuper = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.isSuper;
    }
    save() {
        this.isLoadingResults = true;
        const data = src_app_models_provider_model__WEBPACK_IMPORTED_MODULE_4__["default"].data(this.provider);
        const service = !this.provider.id ? this.providerService.store(data) : this.providerService.update(data);
        service
            .subscribe(response => {
            const modalRef = this.ngbModal.open(_modals_modals_component__WEBPACK_IMPORTED_MODULE_3__.SuccsessModalComponent, { centered: true });
            modalRef.componentInstance.message = response.message;
            this.isLoadingResults = true;
            this.activeModal.close();
        }, () => this.isLoadingResults = false);
    }
    searchCompany() {
        const modalRef = this.ngbModal.open(_companies_companies_component__WEBPACK_IMPORTED_MODULE_5__.CompaniesComponent, { size: 'xl', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' });
        modalRef.componentInstance.isModal = true;
        modalRef.result.then((company) => {
            this.provider.company = company;
            this.provider.company_id = company.id;
        }, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].none);
    }
}
ProviderStoreOrUpdateComponent.ɵfac = function ProviderStoreOrUpdateComponent_Factory(t) { return new (t || ProviderStoreOrUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_7__.ProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal)); };
ProviderStoreOrUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ProviderStoreOrUpdateComponent, selectors: [["app-card-warn"]], inputs: { provider: "provider" }, decls: 51, vars: 12, consts: [[4, "ngIf"], [1, "card", "m-0"], [1, "card-header", "bg-light"], [1, "card-title"], [1, "btn-close-2", 3, "click"], [1, "card-body"], [1, "form-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "mb-3"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "address"], ["type", "text", "name", "address", "placeholder", "Direcci\u00F3n", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], ["for", "code", 1, "control-label"], ["type", "text", "name", "code", "placeholder", "C\u00F3digo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "control-label"], [1, "form-check"], ["type", "radio", "name", "provider-state", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "state-active", 1, "form-check-label"], ["for", "state-inactive", 1, "form-check-label"], ["for", "website"], ["type", "text", "name", "website", "placeholder", "Sitio web", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", 3, "click"], [1, "text-sm", "font-medium", "text-muted", "pointer", "ml-15", 3, "click"], [1, "d-block"], ["class", "d-block", 4, "ngIf"]], template: function ProviderStoreOrUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProviderStoreOrUpdateComponent_spinner_0_Template, 1, 0, "spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProviderStoreOrUpdateComponent_span_4_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProviderStoreOrUpdateComponent_span_5_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " proveedor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProviderStoreOrUpdateComponent_Template_span_click_7_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ProviderStoreOrUpdateComponent_div_10_Template, 10, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ProviderStoreOrUpdateComponent_Template_input_ngModelChange_16_listener($event) { return ctx.provider.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ProviderStoreOrUpdateComponent_Template_input_ngModelChange_22_listener($event) { return ctx.provider.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 8)(24, "div", 15)(25, "div", 10)(26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "RUC");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ProviderStoreOrUpdateComponent_Template_input_ngModelChange_28_listener($event) { return ctx.provider.ruc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 15)(30, "div", 10)(31, "div", 10)(32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 19)(35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ProviderStoreOrUpdateComponent_Template_input_ngModelChange_35_listener($event) { return ctx.provider.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 19)(39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ProviderStoreOrUpdateComponent_Template_input_ngModelChange_39_listener($event) { return ctx.provider.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Inactivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 8)(43, "div", 9)(44, "div", 10)(45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Sitio web");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ProviderStoreOrUpdateComponent_Template_input_ngModelChange_47_listener($event) { return ctx.provider.website = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProviderStoreOrUpdateComponent_Template_span_click_49_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.provider.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.provider.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isSuper);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.provider.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.provider.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.provider.ruc);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 1)("ngModel", ctx.provider.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 0)("ngModel", ctx.provider.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.provider.website);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RadioControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 8561:
/*!************************************************!*\
  !*** ./src/app/admin/sales/sales.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerVoucherComponent": () => (/* binding */ CustomerVoucherComponent),
/* harmony export */   "PointOfSaleComponent": () => (/* binding */ PointOfSaleComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var src_app_admin_modals_modals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app//admin/modals/modals.component */ 3199);
/* harmony import */ var src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/utils */ 8110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var src_app_services_sale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sale.service */ 2125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/spinner.component */ 3812);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.component */ 6454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);











function PointOfSaleComponent_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "spinner");
} }
function PointOfSaleComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_li_9_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const category_r7 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.categorySelected(category_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("bg-info", category_r7.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](category_r7.name);
} }
function PointOfSaleComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_div_14_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const product_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.add(product_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34)(6, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", product_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r11.brand == null ? null : product_r11.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("S/", product_r11.price, "");
} }
function PointOfSaleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.voucher("ticket"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Agregar cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PointOfSaleComponent_a_19_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r16.sale.customer.address);
} }
function PointOfSaleComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 40)(1, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PointOfSaleComponent_a_19_span_5_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.sale.customer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.sale.customer.document_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.sale.customer.document_type === "RUC");
} }
function PointOfSaleComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_span_20_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.removeCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PointOfSaleComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 49)(3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 53)(14, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_li_22_Template_i_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const product_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.minus(product_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_li_22_Template_i_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const product_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.sum(product_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_li_22_Template_span_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const product_r19 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.remove(product_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", product_r19.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r19.brand == null ? null : product_r19.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", product_r19.quantity_sale, " x 1 ", product_r19.unit == null ? null : product_r19.unit.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 8, product_r19.price, "S/"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 11, product_r19.subtotal, "S/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](product_r19.quantity_sale);
} }
function CustomerVoucherComponent_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "spinner");
} }
function CustomerVoucherComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CustomerVoucherComponent_div_13_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.customer.document_number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.customer.document_number);
} }
function CustomerVoucherComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "RUC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CustomerVoucherComponent_div_13_div_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.customer.document_number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.customer.document_number);
} }
function CustomerVoucherComponent_div_13_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CustomerVoucherComponent_div_13_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r11.searchUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Buscar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CustomerVoucherComponent_div_13_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Nombres completos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CustomerVoucherComponent_div_13_div_10_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r16.customer.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r13.customer.name);
} }
function CustomerVoucherComponent_div_13_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Razon social");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CustomerVoucherComponent_div_13_div_10_div_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r18.customer.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r14.customer.name);
} }
function CustomerVoucherComponent_div_13_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div", 26)(2, "div", 15)(3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CustomerVoucherComponent_div_13_div_10_div_5_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r20.customer.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r15.customer.address);
} }
function CustomerVoucherComponent_div_13_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25)(1, "div", 12)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CustomerVoucherComponent_div_13_div_10_div_3_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CustomerVoucherComponent_div_13_div_10_div_4_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CustomerVoucherComponent_div_13_div_10_div_5_Template, 7, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 12)(7, "div", 26)(8, "div", 15)(9, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CustomerVoucherComponent_div_13_div_10_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r22.customer.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 12)(13, "div", 26)(14, "div", 15)(15, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CustomerVoucherComponent_div_13_div_10_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r24.customer.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("not-events", ctx_r5.customer.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.customer.type === "BOLETA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.customer.type === "FACTURA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.customer.type === "FACTURA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r5.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r5.customer.phone);
} }
function CustomerVoucherComponent_div_13_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CustomerVoucherComponent_div_13_span_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r25.removeCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Elegir otro cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CustomerVoucherComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CustomerVoucherComponent_div_13_div_3_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CustomerVoucherComponent_div_13_div_4_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 13)(6, "div", 15)(7, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CustomerVoucherComponent_div_13_span_9_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CustomerVoucherComponent_div_13_div_10_Template, 18, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CustomerVoucherComponent_div_13_span_11_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("not-events", ctx_r1.customer.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.customer.type === "BOLETA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.customer.type === "FACTURA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.customer.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.customer.searched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.customer.id);
} }
class PointOfSaleComponent {
    constructor(productService, ngbModal, saleService) {
        this.productService = productService;
        this.ngbModal = ngbModal;
        this.saleService = saleService;
        this.isLoadingResults = true;
        this.showPanel = false;
        this.products = [];
        this.productFilter = {
            search: null,
            category_id: null
        };
        this.categories = [
            {
                name: 'Todo',
                state: 1,
                selected: true
            }
        ];
        this.taxes_included = false;
        this.sale = this.initialSale();
    }
    showPanelToggle() {
        this.showPanel = !this.showPanel;
    }
    listCategories() {
        this.productService.getCategories()
            .subscribe((response) => {
            this.categories = this.categories.concat(response.data.items);
        });
    }
    categorySelected(category) {
        this.categories.forEach((c) => {
            c.selected = c.id === category.id;
        });
        this.productFilter.category_id = category.id;
        this.list();
    }
    searchProduct(search) {
        this.productFilter.search = search;
        this.list();
    }
    list() {
        this.isLoadingResults = true;
        this.productService.getForSale(this.productFilter)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.isLoadingResults = false))
            .subscribe((response) => {
            this.products = response.data.items;
            this.taxes_included = response.data.taxes_included === 1;
        });
    }
    add(product) {
        const index = this.getProductIndex(product);
        if (index !== -1) {
            this.sum(this.sale.products[index]);
        }
        else {
            this.sale.products.push(Object.assign(Object.assign({}, product), { quantity_sale: 1 }));
            this.refreshSaleAmount();
        }
    }
    sum(product) {
        if (product.quantity_sale > product.quantity) {
            const modalRef = this.ngbModal.open(src_app_admin_modals_modals_component__WEBPACK_IMPORTED_MODULE_0__.WarnModalComponent, { centered: true });
            modalRef.componentInstance.message = 'Se alcanzo el limite de stock del producto.';
        }
        else {
            product.quantity_sale++;
        }
        this.refreshSaleAmount();
    }
    minus(product) {
        product.quantity_sale--;
        if (product.quantity_sale === 0) {
            this.remove(product);
        }
        this.refreshSaleAmount();
    }
    remove(product) {
        const index = this.getProductIndex(product);
        this.sale.products.splice(index, 1);
        this.refreshSaleAmount();
    }
    refreshSaleAmount() {
        this.sale.products.forEach((product) => {
            product.subtotal = product.quantity_sale * product.price;
        });
        if (this.taxes_included) {
            this.sale.total = this.sale.products.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity_sale * currentValue.price), 0);
            this.sale.subtotal = this.sale.total * 0.82;
            this.sale.igv = this.sale.total * 0.18;
        }
    }
    getProductIndex(product) {
        return this.sale.products.findIndex((p) => p.id === product.id);
    }
    voucher(type) {
        const modalRef = this.ngbModal.open(CustomerVoucherComponent, { backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' });
        modalRef.componentInstance.customer = src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["default"].replicate(this.sale.customer);
        modalRef.result
            .then((customer) => {
            this.sale.customer = customer;
        }, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["default"].none);
    }
    removeCustomer() {
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
    save() {
        this.isLoadingResults = true;
        this.saleService.store(this.sale)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.isLoadingResults = false))
            .subscribe((response) => {
            const modalRef = this.ngbModal.open(src_app_admin_modals_modals_component__WEBPACK_IMPORTED_MODULE_0__.SuccsessModalComponent, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["default"].modalCenterIndex1);
            modalRef.componentInstance.message = response.message;
            this.sale = this.initialSale();
        });
    }
    initialSale() {
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
    ngOnInit() {
        this.listCategories();
        this.list();
    }
}
PointOfSaleComponent.ɵfac = function PointOfSaleComponent_Factory(t) { return new (t || PointOfSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_sale_service__WEBPACK_IMPORTED_MODULE_3__.SaleService)); };
PointOfSaleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PointOfSaleComponent, selectors: [["app-sales"]], decls: 44, vars: 24, consts: [[1, "row"], [1, "col-12"], [4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "btn-lg", "mb-3", "text-white", "show-left-part", "d-block", "d-md-none", "fa", "fa-list", 3, "click"], [1, "main-sale"], [1, "left-sale", "bg-white", "fixed-left-sale", "d-flex", "flex-column"], [1, "navbar", "navbar-dark", "navbar-expand-md", "p-0", "border-bottom"], [1, "navbar-collapse", "collapse", "overflow-auto"], [1, "navbar-nav"], ["class", "nav-item p-2 d-flex align-items-center", 3, "bg-info", "click", 4, "ngFor", "ngForOf"], [1, "pt-3", "px-3"], [3, "searchTerm"], [1, "px-3", "flex-grow-1", "overflow-auto"], [1, "row", "el-element-overlay"], ["class", "col-lg-3 col-6", 4, "ngFor", "ngForOf"], [1, "right-sale", "bg-white"], [1, "d-flex", "flex-column", "h-100", "position-relative"], [1, "d-flex", "align-items-center", "p-3", "border-bottom"], ["class", "flex-grow-1 pointer", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "class", "flex-grow-1", 4, "ngIf"], ["class", "font-medium ml-15", 3, "click", 4, "ngIf"], [1, "contact-list", "list-style-none", "flex-grow-1", "overflow-auto"], ["class", "contact-item border-bottom px-3 py-2 d-flex gap-3 align-items-center", 4, "ngFor", "ngForOf"], [1, "p-3"], [1, "mb-1"], [1, "float-end"], ["type", "button", 1, "btn", "btn-info", "w-100", 3, "disabled", "click"], [1, "nav-item", "p-2", "d-flex", "align-items-center", 3, "click"], [1, "nav-link", "text-nowrap", "pointer"], [1, "col-lg-3", "col-6"], [1, "card"], [1, "el-card-item", "pointer", 3, "click"], [1, "el-overlay-1", "mb-3"], ["width", "100%", "height", "auto", "alt", "user", 3, "src"], [1, "px-2"], [1, "mb-0"], [1, "text-muted", "text-sm", "line-height-1", "mt-1", "d-block"], [1, "d-block", "mt-1"], [1, "flex-grow-1", "pointer", 3, "click"], [1, "fa", "fa-user", "mr-10"], ["href", "javascript:void(0)", 1, "flex-grow-1"], [1, "message-title"], [1, "d-block", "fs-3", "text-muted"], ["class", "fs-2 d-block text-muted", 4, "ngIf"], [1, "fs-2", "d-block", "text-muted"], [1, "font-medium", "ml-15", 3, "click"], [1, "fa", "fa-trash", "pointer"], [1, "contact-item", "border-bottom", "px-3", "py-2", "d-flex", "gap-3", "align-items-center"], ["height", "35", "width", "35", 1, "rounded-circle", 3, "src"], [1, "line-height-1", "flex-grow-1"], [1, "font-medium"], [1, "text-muted", "text-sm", "my-1", "d-block"], [1, "text-secondary", "text-sm", "d-block"], [1, "font-medium", "d-flex", "gap-2", "justify-content-between"], [1, "fa", "fa-minus", "pointer", 3, "click"], [1, "fa", "fa-plus", "pointer", 3, "click"]], template: function PointOfSaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PointOfSaleComponent_spinner_2_Template, 1, 0, "spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_Template_a_click_3_listener() { return ctx.showPanelToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "div", 7)(8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PointOfSaleComponent_li_9_Template, 3, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 10)(11, "search", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("searchTerm", function PointOfSaleComponent_Template_search_searchTerm_11_listener($event) { return ctx.searchProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 12)(13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PointOfSaleComponent_div_14_Template, 12, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 15)(16, "div", 16)(17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PointOfSaleComponent_div_18_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PointOfSaleComponent_a_19_Template, 6, 3, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PointOfSaleComponent_span_20_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PointOfSaleComponent_li_22_Template, 20, 14, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 23)(24, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Subtotal: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "IGV (18%): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h3")(36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Total :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointOfSaleComponent_Template_button_click_42_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Vender");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("fa-close", ctx.showPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show-panel", ctx.showPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.sale.customer.document_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sale.customer.document_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sale.customer.document_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.sale.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](28, 15, ctx.sale.subtotal, "S/"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](33, 18, ctx.sale.igv, "S/"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](40, 21, ctx.sale.total, "S/"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.sale.products.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe], encapsulation: 2 });
class CustomerVoucherComponent {
    constructor(activeModal, ngbModal, saleService) {
        this.activeModal = activeModal;
        this.ngbModal = ngbModal;
        this.saleService = saleService;
        this.isLoadingResults = false;
    }
    selectVoucherType(type) {
        if (this.customer.type === type) {
            this.customer.type = null;
            this.removeCustomer();
        }
        else {
            this.customer.type = type;
            this.customer.document_type = type === 'BOLETA' ? 'DNI' : 'RUC';
        }
    }
    searchUser() {
        if (this.customer.type === 'BOLETA') {
            if (this.customer.document_number.length !== 8) {
                const modalRef = this.ngbModal.open(src_app_admin_modals_modals_component__WEBPACK_IMPORTED_MODULE_0__.WarnModalComponent, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["default"].modalCenterIndex1);
                modalRef.componentInstance.message = 'El DNI debe tener 8 digitos.';
                return;
            }
        }
        else if (this.customer.type === 'FACTURA') {
            if (this.customer.document_number.length !== 11) {
                const modalRef = this.ngbModal.open(src_app_admin_modals_modals_component__WEBPACK_IMPORTED_MODULE_0__.WarnModalComponent, src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["default"].modalCenterIndex1);
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
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.isLoadingResults = false))
            .subscribe((response) => {
            this.customer.searched = true;
            this.customer = Object.assign(this.customer, response.data);
        });
    }
    removeCustomer() {
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
        }
        else if (this.customer.type === 'FACTURA') {
            return !(this.customer.document_number && this.customer.document_number.length === 11 && this.customer.name && this.customer.address);
        }
        return true;
    }
    save() {
        this.activeModal.close(this.customer);
    }
}
CustomerVoucherComponent.ɵfac = function CustomerVoucherComponent_Factory(t) { return new (t || CustomerVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_sale_service__WEBPACK_IMPORTED_MODULE_3__.SaleService)); };
CustomerVoucherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CustomerVoucherComponent, selectors: [["app-card-warn"]], inputs: { customer: "customer" }, decls: 17, vars: 14, consts: [[4, "ngIf"], [1, "card", "m-0"], [1, "card-header", "bg-light"], [1, "card-title"], [1, "btn-close-2", 3, "click"], [1, "card-body"], [1, "form-body"], [1, "d-flex", "mb-3"], [1, "p-3", "flex-grow-1", "text-center", "pointer", 3, "click"], ["class", "customer", 4, "ngIf"], [1, "btn", "btn-info", "d-block", 3, "click"], [1, "customer"], [1, "row"], [1, "col-6"], ["class", "mb-3", 4, "ngIf"], [1, "mb-3"], [1, "control-label"], ["class", "btn btn-info d-block", 3, "click", 4, "ngIf"], ["class", "info", 3, "not-events", 4, "ngIf"], ["class", "d-block pointer text-end text-info", 3, "click", 4, "ngIf"], ["for", "dni", 1, "control-label"], [1, "fa", "fa-asterisk", "mr-5", "text-danger"], ["type", "text", "name", "dni", "placeholder", "DNI", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ruc", 1, "control-label"], ["type", "text", "name", "ruc", "placeholder", "RUC", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "info"], [1, "col-12"], ["class", "row", 4, "ngIf"], ["for", "email"], ["type", "text", "name", "email", "placeholder", "Correo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "text", "name", "phone", "placeholder", "Tel\u00E9fono", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "address"], ["type", "text", "name", "address", "placeholder", "Direcci\u00F3n", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-block", "pointer", "text-end", "text-info", 3, "click"]], template: function CustomerVoucherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CustomerVoucherComponent_spinner_0_Template, 1, 0, "spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Informaci\u00F3n del cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CustomerVoucherComponent_Template_span_click_5_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CustomerVoucherComponent_Template_div_click_9_listener() { return ctx.selectVoucherType("BOLETA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Boleta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CustomerVoucherComponent_Template_div_click_11_listener() { return ctx.selectVoucherType("FACTURA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Factura ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CustomerVoucherComponent_div_13_Template, 12, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CustomerVoucherComponent_Template_span_click_15_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("not-events", ctx.customer.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-white", ctx.customer.type === "BOLETA")("bg-light", ctx.customer.type === "BOLETA");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-white", ctx.customer.type === "FACTURA")("bg-light", ctx.customer.type === "FACTURA");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.customer.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("not-events", ctx.customerIsInvalid());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 6454:
/*!**************************************************!*\
  !*** ./src/app/admin/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);





function SearchComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.create.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class SearchComponent {
    constructor() {
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.createButton = false;
        this.term = '';
        this.modelSearchChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.modelSearchChanged
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(400), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)())
            .subscribe(term => {
            this.searchTerm.emit(term);
        });
    }
    changed(term) {
        this.modelSearchChanged.next(term);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["search"]], inputs: { createButton: "createButton" }, outputs: { searchTerm: "searchTerm", create: "create" }, decls: 5, vars: 2, consts: [[1, "input-group", "mb-3"], [1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-plus", "mr-5"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_3_listener($event) { return ctx.changed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/profile/profile.component */ 9046);
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/login/login.component */ 3359);
/* harmony import */ var _admin_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/products/products.component */ 575);
/* harmony import */ var _admin_providers_providers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/providers/providers.component */ 7944);
/* harmony import */ var _admin_companies_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/companies/companies.component */ 2687);
/* harmony import */ var _admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/brands/brands.component */ 1468);
/* harmony import */ var _admin_sales_sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/sales/sales.component */ 8561);








const AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            { path: '', redirectTo: '/perfil', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
            },
            {
                path: 'login',
                component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
            },
            {
                path: 'perfil',
                component: _admin_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
            },
            {
                path: 'productos',
                component: _admin_products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent
            },
            {
                path: 'proveedores',
                component: _admin_providers_providers_component__WEBPACK_IMPORTED_MODULE_4__.ProvidersComponent
            },
            {
                path: 'empresas',
                component: _admin_companies_companies_component__WEBPACK_IMPORTED_MODULE_5__.CompaniesComponent
            },
            {
                path: 'marcas',
                component: _admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_6__.BrandsComponent
            },
            {
                path: 'punto-de-venta',
                component: _admin_sales_sales_component__WEBPACK_IMPORTED_MODULE_7__.PointOfSaleComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/starter'
    }
];


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service. */ 4045);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);





class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
                if (!this.authService.getToken() && !event.url.includes('/login')) {
                    this.router.navigate(['/login']);
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) { }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service___WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _shared_header_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/navigation.component */ 8006);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 7500);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 8189);
/* harmony import */ var _interceptors_catch_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/catch.interceptor */ 3558);
/* harmony import */ var _admin_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/search/search.component */ 6454);
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/login/login.component */ 3359);
/* harmony import */ var _admin_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/products/products.component */ 575);
/* harmony import */ var _admin_providers_providers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/providers/providers.component */ 7944);
/* harmony import */ var _admin_companies_companies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/companies/companies.component */ 2687);
/* harmony import */ var _admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/brands/brands.component */ 1468);
/* harmony import */ var _interceptors_roleuser_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/roleuser.interceptor */ 9930);
/* harmony import */ var _admin_sales_sales_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/sales/sales.component */ 8561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);






























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__.AuthInterceptor,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _interceptors_catch_interceptor__WEBPACK_IMPORTED_MODULE_7__.CatchInterceptor,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _interceptors_roleuser_interceptor__WEBPACK_IMPORTED_MODULE_14__.RoleuserInterceptor,
            multi: true
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__.PathLocationStrategy
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbActiveModal
        },
        {
            provide: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.MenuEventService
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutes, { useHash: false, relativeLinkResolution: 'legacy' }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__.CdkTableModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        _shared_header_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent,
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent,
        _admin_search_search_component__WEBPACK_IMPORTED_MODULE_8__.SearchComponent,
        _admin_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent,
        _admin_products_products_component__WEBPACK_IMPORTED_MODULE_10__.ProductsComponent,
        _admin_products_products_component__WEBPACK_IMPORTED_MODULE_10__.ProductStoreOrUpdateComponent,
        _admin_providers_providers_component__WEBPACK_IMPORTED_MODULE_11__.ProvidersComponent,
        _admin_providers_providers_component__WEBPACK_IMPORTED_MODULE_11__.ProviderStoreOrUpdateComponent,
        _admin_companies_companies_component__WEBPACK_IMPORTED_MODULE_12__.SearchComponent,
        _admin_companies_companies_component__WEBPACK_IMPORTED_MODULE_12__.CompaniesComponent,
        _admin_companies_companies_component__WEBPACK_IMPORTED_MODULE_12__.CompaniesStoreOrUpdateComponent,
        _admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_13__.BrandsComponent,
        _admin_brands_brands_component__WEBPACK_IMPORTED_MODULE_13__.BrandsStoreOrUpdateComponent,
        _admin_sales_sales_component__WEBPACK_IMPORTED_MODULE_15__.PointOfSaleComponent,
        _admin_sales_sales_component__WEBPACK_IMPORTED_MODULE_15__.CustomerVoucherComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__.CdkTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule] }); })();


/***/ }),

/***/ 2888:
/*!**************************************!*\
  !*** ./src/app/helpers/http.util.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HttpUtils)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);

class HttpUtils {
    static paginationCatchError(response) {
        const pagination = {
            message: '',
            data: {
                items: [],
                page: 0,
                pages: 0,
                per_page: 0,
                total: 0,
            }
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(pagination);
    }
}


/***/ }),

/***/ 6963:
/*!***************************************!*\
  !*** ./src/app/helpers/table.util.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableFilter": () => (/* binding */ TableFilter)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class TableFilter {
    constructor() {
        this.filter = {
            term: '',
            search: new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter()
        };
        this.filter.search.subscribe(term => {
            if (term !== undefined) {
                this.filter.term = term;
            }
        });
    }
    startWith(sort, paginator) {
        this.sort = sort;
        this.paginator = paginator;
    }
    params() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('search', this.filter.term)
            .set('sort', this.sort.active)
            .set('direction', this.sort.direction)
            .set('page', this.paginator.pageIndex)
            .set('per_page', this.paginator.pageSize);
    }
}


/***/ }),

/***/ 8110:
/*!**********************************!*\
  !*** ./src/app/helpers/utils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
class Utils {
    static none(data) { }
    static replicate(data) {
        return JSON.parse(JSON.stringify(data));
    }
}
Utils.modalCenter = { centered: true };
Utils.modalIndex1 = { backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
Utils.modalIndex2 = { backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
Utils.modalIndex3 = { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };
Utils.modalCenterIndex1 = { centered: true, backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
Utils.modalCenterIndex2 = { centered: true, backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
Utils.modalCenterIndex3 = { centered: true, backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };


/***/ }),

/***/ 8189:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_auth_service___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service. */ 4045);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ 7500);




class AuthInterceptor {
    constructor(tokenXsrf, authService, menuEventService) {
        this.tokenXsrf = tokenXsrf;
        this.authService = authService;
        this.menuEventService = menuEventService;
        this.headerName = 'X-XSRF-TOKEN';
    }
    intercept(request, next) {
        if (!request.url.includes('api/csrf-cookie')) {
            request = this.headers(request);
        }
        return next.handle(request);
    }
    headers(request) {
        request = request.clone({
            withCredentials: true,
            headers: request.headers
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        });
        const token = this.authService.getToken();
        const tokenXsrf = this.tokenXsrf.getToken();
        if (token !== null) {
            request = request.clone({
                headers: request.headers
                    .set('Authorization', `Bearer ${token}`)
            });
        }
        if (tokenXsrf !== null) {
            request = request.clone({
                headers: request.headers
                    .set('X-XSRF-TOKEN', tokenXsrf)
            });
        }
        return request;
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service___WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.MenuEventService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 3558:
/*!***************************************************!*\
  !*** ./src/app/interceptors/catch.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatchInterceptor": () => (/* binding */ CatchInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _admin_modals_modals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/modals/modals.component */ 3199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







class CatchInterceptor {
    constructor(ngbModal, router) {
        this.ngbModal = ngbModal;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            var _a;
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse && !((_a = err.url) === null || _a === void 0 ? void 0 : _a.includes('/login'))) {
                const modalRef = this.ngbModal.open(_admin_modals_modals_component__WEBPACK_IMPORTED_MODULE_0__.WarnModalComponent, { centered: true, backdropClass: 'z-index-backdrop-warn', windowClass: 'z-index-window-warn' });
                modalRef.componentInstance.message = err.error.message;
                if (err.status === 401) {
                    this.router.navigate(['/login']);
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
        }));
    }
}
CatchInterceptor.ɵfac = function CatchInterceptor_Factory(t) { return new (t || CatchInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
CatchInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CatchInterceptor, factory: CatchInterceptor.ɵfac });


/***/ }),

/***/ 9930:
/*!******************************************************!*\
  !*** ./src/app/interceptors/roleuser.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleuserInterceptor": () => (/* binding */ RoleuserInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ 7500);





class RoleuserInterceptor {
    constructor(menuEventService) {
        this.menuEventService = menuEventService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                const role = event.headers.get('Role-user');
                if (role) {
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.roleUser = role;
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.isSuper = role === 'Super';
                    this.menuEventService.dispathEvent(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.isSuper);
                }
            }
        }));
    }
}
RoleuserInterceptor.ɵfac = function RoleuserInterceptor_Factory(t) { return new (t || RoleuserInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.MenuEventService)); };
RoleuserInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RoleuserInterceptor, factory: RoleuserInterceptor.ɵfac });


/***/ }),

/***/ 6729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service. */ 4045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _shared_header_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/header/navigation.component */ 8006);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ 7500);








function FullComponent_header_1_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 18)(2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.user == null ? null : ctx_r2.user.company == null ? null : ctx_r2.user.company.short_logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.user == null ? null : ctx_r2.user.company == null ? null : ctx_r2.user.company.short_logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function FullComponent_header_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 18)(2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.user == null ? null : ctx_r3.user.company == null ? null : ctx_r3.user.company.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.user == null ? null : ctx_r3.user.company == null ? null : ctx_r3.user.company.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function FullComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 5)(1, "nav", 6)(2, "div", 7)(3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FullComponent_header_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.showMobileMenu = !ctx_r4.showMobileMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FullComponent_header_1_b_6_Template, 3, 2, "b", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FullComponent_header_1_span_7_Template, 3, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FullComponent_header_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.isCollapsed = !ctx_r6.isCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 15)(11, "app-navigation", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toggleSidebar", function FullComponent_header_1_Template_app_navigation_toggleSidebar_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.toggleSidebarType(); })("toggleTheme", function FullComponent_header_1_Template_app_navigation_toggleTheme_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.toggleThemeType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.expandLogo ? "expand-logo" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.showMobileMenu ? "bi bi-text-left fs-6" : "bi bi-text-left fs-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/punto-de-venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.user == null ? null : ctx_r0.user.company == null ? null : ctx_r0.user.company.short_logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.user == null ? null : ctx_r0.user.company == null ? null : ctx_r0.user.company.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx_r0.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", !ctx_r0.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sidebartype", ctx_r0.sidebartype)("sidebartheme", ctx_r0.sidebartheme);
} }
function FullComponent_aside_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "aside", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function FullComponent_aside_2_Template_aside_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.Logo(); })("mouseout", function FullComponent_aside_2_Template_aside_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.Logo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "show-sidebar": a0 }; };
//declare var $: any;
class FullComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.showHeaderAndAside = true;
        this.isCollapsed = false;
        this.innerWidth = 0;
        this.defaultSidebar = "";
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.sidebartype = "full";
        this.sidebartheme = "dark";
        this.user = {
            nick: '',
            full_name: '',
            email: '',
            phone: '',
            image: '',
            role_name: '',
            company: {
                name: '',
                logo: 'https://fabrikatoy.s3.amazonaws.com/images/logo/logo-chunka-light.png',
                short_logo: 'https://fabrikatoy.s3.amazonaws.com/images/logo/short-logo-chunka-light-1.png',
            }
        };
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this.showHeaderAndAside = event.url !== '/login';
            }
        });
    }
    Logo() {
        this.expandLogo = !this.expandLogo;
    }
    ngOnInit() {
        if (this.router.url === "/") {
            this.router.navigate(["/dashboard"]);
        }
        this.defaultSidebar = this.sidebartype;
        this.handleSidebar();
    }
    onResize() {
        this.handleSidebar();
    }
    handleSidebar() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1170) {
            this.sidebartype = "full";
        }
        else {
            this.sidebartype = this.defaultSidebar;
        }
    }
    toggleSidebarType() {
        switch (this.sidebartype) {
            case "full":
                this.sidebartype = "mini-sidebar";
                break;
            case "mini-sidebar":
                this.sidebartype = "full";
                break;
            default:
        }
    }
    toggleThemeType() {
        switch (this.sidebartheme) {
            case "dark":
                this.sidebartheme = "";
                break;
            case "":
                this.sidebartheme = "dark";
                break;
            default:
        }
        document.body.dataset['theme'] = this.sidebartheme;
    }
    ngAfterViewInit() {
        const user = this.authService.getUser();
        if (user) {
            this.user = JSON.parse(user);
        }
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service___WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], hostBindings: function FullComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 8, consts: [["id", "main-wrapper", "dir", "ltr", "data-layout", "vertical", "data-sidebar-position", "fixed", "data-header-position", "fixed", "data-boxed-layout", "full", 3, "ngClass"], ["class", "topbar", "data-navbarbg", "skin2", 4, "ngIf"], ["class", "left-sidebar ps", "data-sidebarbg", "skin2", 3, "mouseover", "mouseout", 4, "ngIf"], [1, ""], [1, "container-fluid"], ["data-navbarbg", "skin2", 1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-lg", "navbar-dark"], ["data-logobg", "skin2", 1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-lg-none", 3, "click"], [3, "ngClass"], [1, "navbar-brand", 3, "routerLink"], ["class", "logo-icon", 4, "ngIf"], ["class", "logo-text", 4, "ngIf"], ["href", "javascript:void(0)", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "topbartoggler", "d-block", "d-lg-none", "waves-effect", "waves-light", 3, "click"], [1, "bi", "bi-text-right", "fs-6"], ["id", "navbarSupportedContent", "data-navbarbg", "skin3", 1, "navbar-collapse", "collapse", 3, "ngbCollapse"], [1, "w-100", 3, "sidebartype", "sidebartheme", "toggleSidebar", "toggleTheme"], [1, "logo-icon"], ["alt", "", 1, "dark-logo", 3, "src"], ["alt", "", 1, "dark-light", 3, "src"], [1, "logo-text"], ["alt", "", 1, "light-logo", 3, "src"], ["data-sidebarbg", "skin2", 1, "left-sidebar", "ps", 3, "mouseover", "mouseout"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FullComponent_header_1_Template, 12, 9, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FullComponent_aside_2_Template, 2, 0, "aside", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.showMobileMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-sidebartype", ctx.sidebartype);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showHeaderAndAside);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showHeaderAndAside);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("page-wrapper", ctx.showHeaderAndAside);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapse, _shared_header_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: [".max-width[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC13aWR0aCB7XHJcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9753:
/*!***************************************!*\
  !*** ./src/app/models/brand.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrandRequest)
/* harmony export */ });
class BrandRequest {
    static data(brand) {
        let data = {
            name: brand.name,
            state: brand.state,
        };
        if (brand.company_id) {
            data.company_id = brand.company_id;
        }
        if (brand.id) {
            data.id = brand.id;
        }
        return data;
    }
}


/***/ }),

/***/ 1454:
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductRequest)
/* harmony export */ });
class ProductRequest {
    static data(product) {
        let data = {
            brand_id: product.brand_id,
            code: product.code,
            name: product.name,
            state: product.state,
            providers: product.providers.map((p) => p.id),
        };
        if (product.company_id) {
            data.company_id = product.company_id;
        }
        if (product.id) {
            data.id = product.id;
        }
        return data;
    }
}


/***/ }),

/***/ 6231:
/*!******************************************!*\
  !*** ./src/app/models/provider.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProviderRequest)
/* harmony export */ });
class ProviderRequest {
    static data(provider) {
        let data = {
            ruc: provider.ruc,
            name: provider.name,
            address: provider.address,
            website: provider.website,
            state: provider.state,
        };
        if (provider.company_id) {
            data.company_id = provider.company_id;
        }
        if (provider.id) {
            data.id = provider.id;
        }
        return data;
    }
}


/***/ }),

/***/ 4045:
/*!*******************************************!*\
  !*** ./src/app/services/auth.service..ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3575);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(user) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.zip)(this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/csrf-cookie`), this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/login`, user));
    }
    logout() {
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/logout`, {})
            .subscribe(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
        });
    }
    setUser(user) {
        localStorage.setItem('user', user);
    }
    getUser() {
        return localStorage.getItem('user');
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7744:
/*!*******************************************!*\
  !*** ./src/app/services/brand.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandService": () => (/* binding */ BrandService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class BrandService {
    constructor(http) {
        this.http = http;
    }
    getAll(params) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/brands`, { params: params });
    }
    store(brand) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/brands`, brand);
    }
    update(brand) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/brands/${brand.id}`, brand);
    }
}
BrandService.ɵfac = function BrandService_Factory(t) { return new (t || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BrandService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrandService, factory: BrandService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6196:
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyService": () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class CompanyService {
    constructor(http) {
        this.http = http;
    }
    getAll(params) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/companies`, { params: params });
    }
    store(company) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/companies`, company);
    }
    update(company) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/companies/${company.id}`, company);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ProductService {
    constructor(http) {
        this.http = http;
    }
    getAll(params) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/products`, { params });
    }
    getForSale(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (params.search) {
            httpParams = httpParams.set('search', params.search);
        }
        if (params.category_id) {
            httpParams = httpParams.set('category_id', params.category_id);
        }
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/products-for-sale`, { params: httpParams });
    }
    getCategories() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/categories`);
    }
    store(product) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/products`, product);
    }
    update(product) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/products/${product.id}`, product);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1886:
/*!*********************************************!*\
  !*** ./src/app/services/profile.servise.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getProfile() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/me`);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5872:
/*!**********************************************!*\
  !*** ./src/app/services/provider.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderService": () => (/* binding */ ProviderService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ProviderService {
    constructor(http) {
        this.http = http;
    }
    getAll(params) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/providers`, { params: params });
    }
    store(provider) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/providers`, provider);
    }
    update(provider) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/providers/${provider.id}`, provider);
    }
}
ProviderService.ɵfac = function ProviderService_Factory(t) { return new (t || ProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProviderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProviderService, factory: ProviderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2125:
/*!******************************************!*\
  !*** ./src/app/services/sale.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleService": () => (/* binding */ SaleService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class SaleService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    store(params) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/sale`, params);
    }
    getCustomer(params) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/sale/customer`, { params });
    }
}
SaleService.ɵfac = function SaleService_Factory(t) { return new (t || SaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SaleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SaleService, factory: SaleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8006:
/*!*******************************************************!*\
  !*** ./src/app/shared/header/navigation.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service. */ 4045);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





class NavigationComponent {
    constructor(authService) {
        this.authService = authService;
        this.sidebartype = '';
        this.sidebartheme = '';
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.toggleTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.config = {};
        this.user = {
            nick: '',
            full_name: '',
            email: '',
            phone: '',
            image: '',
            role_name: '',
            company: {
                name: ''
            }
        };
        this.selectedLanguage = {
            language: 'Español',
            code: 'es',
            type: 'ES',
            icon: 'es'
        };
    }
    toggleSidebarType() {
        this.toggleSidebar.emit();
    }
    toggleThemeType() {
        this.toggleTheme.emit();
    }
    ngAfterViewInit() {
        const user = this.authService.getUser();
        if (user) {
            this.user = JSON.parse(user);
        }
    }
    logout() {
        this.authService.logout();
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service___WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { sidebartype: "sidebartype", sidebartheme: "sidebartheme" }, outputs: { toggleSidebar: "toggleSidebar", toggleTheme: "toggleTheme" }, decls: 29, vars: 15, consts: [[1, "navbar-nav", "float-start", "me-auto"], [1, "nav-item", "d-none", "d-md-block"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "bi"], [1, "navbar-nav", "float-end"], ["ngbDropdown", "", "placement", "bottom-end", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "waves-effect", "waves-dark", "pro-pic"], ["alt", "user", "width", "35", 1, "rounded-circle", 3, "src"], [1, "ms-2"], ["ngbDropdownMenu", "", 1, "dropdown-menu-end", "user-dd", "dropdown-menu-animate-up", "dropdown-menu", "pb-0", "shadow"], [1, "d-flex", "no-block", "align-items-center", "p-3", "bg-info", "text-white"], ["alt", "user", "width", "60", 1, "rounded-circle", 3, "src"], [1, "mb-0", "text-white"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-user-alt", "mx-1"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-moon", "mx-1"], [1, "dropdown-divider", "m-0"], [1, "fa", "fa-power-off", "mx-1"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() { return ctx.toggleSidebarType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4)(5, "li", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Mi Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_22_listener() { return ctx.toggleThemeType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Cerrar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-arrow-left-circle", ctx.sidebartype == "full")("bi-arrow-right-circle", ctx.sidebartype == "mini-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user == null ? null : ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user == null ? null : ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fa-moon", ctx.sidebartheme == "")("fa-sun", ctx.sidebartheme == "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.sidebartheme == "dark" ? "Modo Claro" : "Modo Oscuro", " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 4456:
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [
    // {
    //   path: '/dashboard',
    //   title: 'Dashboard',
    //   icon: 'fa fa-chart-pie',
    //   class: '',
    //   extralink: false,
    //   submenu: [],
    //   super: false
    // },
    {
        path: '/empresas',
        title: 'Empresas',
        icon: 'fa fa-shop',
        class: '',
        extralink: false,
        submenu: [],
        super: true
    },
    {
        path: '/usuarios',
        title: 'Usuarios',
        icon: 'fa fa-user-friends',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
    {
        path: '/proveedores',
        title: 'Proveedores',
        icon: 'fa fa-box',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
    {
        path: '/productos',
        title: 'Productos',
        icon: 'fa fa-bag-shopping',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
    {
        path: '/marcas',
        title: 'Marcas',
        icon: 'fa fa-spell-check',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
    {
        path: '/clientes',
        title: 'Clientes',
        icon: 'fa fa-users',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
    {
        path: '/punto-de-venta',
        title: 'Punto de venta',
        icon: 'fa fa-credit-card',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
    {
        path: '/ventas',
        title: 'Reporte de ventas',
        icon: 'fa fa-chart-line',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
    {
        path: '/compras',
        title: 'Reporte de compras',
        icon: 'fa fa-chart-pie',
        class: '',
        extralink: false,
        submenu: [],
        super: false
    },
];


/***/ }),

/***/ 7500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuEventService": () => (/* binding */ MenuEventService),
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





function SidebarComponent_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_li_2_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.addExpandClass(sidebarnavItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarnavItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1.class))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
function SidebarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_li_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_li_2_a_2_Template, 4, 11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);
} }
class SidebarComponent {
    constructor(menuEventService) {
        this.menuEventService = menuEventService;
        this.showMenu = '';
        this.showSubMenu = '';
        this.sidebarnavItems = [];
    }
    // this is for the open close
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    // End open close
    ngOnInit() {
        this.menuEventService.events.subscribe((isSuper) => {
            this.sidebarnavItems = isSuper ? _menu_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES : _menu_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(item => item.super === false);
        });
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(item => item.super === false);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MenuEventService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 3, vars: 1, consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], [1, "nav-small-cap"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], [3, "ngClass"], [1, "hide-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_li_2_Template, 3, 5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], encapsulation: 2 });
class MenuEventService {
    constructor() {
        this._eventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.events = this._eventSubject.asObservable();
    }
    dispathEvent(isSuper) {
        this._eventSubject.next(isSuper);
    }
}


/***/ }),

/***/ 3812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "lds-grid"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 11, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'http://localhost/api',
    roleUser: '',
    isSuper: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map