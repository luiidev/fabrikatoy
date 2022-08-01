import { BranchOffice } from "./branch-office.model";
import { Brand } from "./brand.model";
import { Category } from "./category.model";
import { Company } from "./company.model";
import { Customer } from "./customer.model";
import { Product } from "./product.model";
import { Provider } from "./provider.model";
import { User } from "./user.model";

export interface Response {
  message: string;
  data: object;
}

interface Pagination {
  page: number;
  pages: number;
  per_page: number;
  total: number;
}

/**
 * Estructura para respuesta de modelos sin paginacion
 */
interface BranchOfficeItems {
  items: BranchOffice[];
}
interface BrandItems {
  items: Brand[];
}
interface CategoryItems {
  items: Category[];
}
interface CompanyItems {
  items: Company[];
}
interface CustomerItems {
  items: Customer[];
}
interface ProductItems {
  items: Product[];
}
interface ProviderItems {
  items: Provider[];
}
interface UserItems {
  items: User[];
}

/**
 * Estructura para respuesta de modelos con paginacion
 */
interface BranchOfficePagination extends Pagination, BranchOfficeItems {}
interface BrandPagination extends Pagination, BrandItems {}
interface CategoryPagination extends Pagination, CategoryItems {}
interface CompanyPagination extends Pagination, CompanyItems {}
interface CustomerPagination extends Pagination, CustomerItems {}
interface ProductPagination extends Pagination, ProductItems {}
interface ProviderPagination extends Pagination, ProviderItems {}
interface UserPagination extends Pagination, UserItems {}

/**
 * Implementacion de respuesta de modelos sin paginacion
 */
export interface BranchOfficeArrayResponse extends Response {
  data: BranchOfficeItems;
}
export interface BrandArrayResponse extends Response {
  data: BrandItems;
}
export interface CategoryArrayResponse extends Response {
  data: CategoryItems;
}
export interface CompanyArrayResponse extends Response {
  data: CompanyItems;
}
export interface CustomerArrayResponse extends Response {
  data: CustomerItems;
}
export interface ProductArrayResponse extends Response {
  data: ProductItems;
}
export interface ProviderArrayResponse extends Response {
  data: ProviderItems;
}
export interface UserArrayResponse extends Response {
  data: UserItems;
}

/**
 * Implementacion de respuesta de modelos con paginacion
 */
export interface BranchOfficePaginationResponse extends Response {
  data: BranchOfficePagination;
}
export interface BrandPaginationResponse extends Response {
  data: BrandPagination;
}
export interface CategoryPaginationResponse extends Response {
  data: CategoryPagination;
}
export interface CompanyPaginationResponse extends Response {
  data: CompanyPagination;
}
export interface CustomerPaginationResponse extends Response {
  data: CustomerPagination;
}
export interface ProductPaginationResponse extends Response {
  data: ProductPagination;
}
export interface ProviderPaginationResponse extends Response {
  data: ProviderPagination;
}
export interface UserPaginationResponse extends Response {
  data: UserPagination;
}

/**
 * Implementacion de respuesta de creacion y actualizacion de modelos
 */
export interface BranchOfficeResponse extends Response {
  data: BranchOffice;
}
export interface BrandResponse extends Response {
  data: Brand;
}
export interface CategoryResponse extends Response {
  data: Category;
}
export interface CompanyResponse extends Response {
  data: Company;
}
export interface CustomerResponse extends Response {
  data: Customer;
}
export interface ProductResponse extends Response {
  data: Product;
}
export interface ProviderResponse extends Response {
  data: Provider;
}
export interface UserResponse extends Response {
  data: User;
}
export interface AuthUserResponse extends Response {
  data: User;
  token: string;
}
