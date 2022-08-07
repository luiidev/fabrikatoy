import { BranchOffice } from "./branch-office.model";
import { Company } from "./company.model";
import { Customer } from "./customer.model";
import { User } from "./user.model";

export interface Sale {
  id?: number;
  company_id?: number;
  branch_office_id?: number;
  user_id?: number;
  customer_id?: number;
  type: string | null;
  number: string | null;
  document: string | null;
  date: string;
  subtotal: number;
  igv: number;
  total: number;
  state: number;
  state_name?: string;
  company?: Company;
  branch_offcie?: BranchOffice;
  user?: User;
  customer?: Customer;
}
