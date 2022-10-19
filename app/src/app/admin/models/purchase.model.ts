import { BranchOffice } from "./branch-office.model";
import { Company } from "./company.model";
import { Provider } from "./provider.model";
import { Product } from "./product.model";
import { Unit } from "./unit.model";
import { User } from "./user.model";

export interface Purchase {
  id?: number;
  company_id?: number;
  branch_office_id?: number;
  user_id?: number;
  provider_id?: number | null;
  uuid?: string;
  type: string | null;
  number: string | null;
  document: string | null;
  date: string | null;
  subtotal?: number;
  igv?: number;
  total?: number;
  state?: number;
  state_name?: string;
  detail?: PurchaseDetail[];
  company?: Company;
  branch_offcie?: BranchOffice;
  user?: User;
  provider?: Provider;
}

export interface PurchaseDetail {
  id?: number;
  purchase_id?: number;
  product_id: number;
  unit_id: number;
  quantity: number;
  price: number;
  total: number;
  observation: string | null;
  state?: number;
  state_name?: string;
  product?: Product
  unit?: Unit
}
