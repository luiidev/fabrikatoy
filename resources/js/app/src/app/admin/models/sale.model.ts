import { BranchOffice } from "./branch-office.model";
import { Company } from "./company.model";
import { Customer } from "./customer.model";
import { Product } from "./product.model";
import { Unit } from "./unit.model";
import { User } from "./user.model";

export interface Sale {
  id?: number;
  company_id?: number;
  branch_office_id?: number;
  user_id?: number;
  customer_id?: number;
  uuid?: string;
  type: string | null;
  number: string | null;
  document: string | null;
  date: string;
  subtotal: number;
  igv: number;
  total: number;
  state: number;
  state_name?: string;
  detail?: SaleDetail[];
  company?: Company;
  branch_offcie?: BranchOffice;
  user?: User;
  customer?: Customer;
}

export interface SaleDetail {
  id: number;
  sale_id: number;
  product_id: number;
  quantity: number;
  unit_id: number;
  price: number;
  total: number;
  observation: string;
  state: number;
  state_name: string;
  product: Product
  unit: Unit
}
