import { Company } from "./company.model";

export interface Customer {
  id?: number;
  company_id?: number;
  document_type: string | null;
  document_number: string | null;
  name: string;
  address?: string | null;
  email?: string | null;
  phone?: string | null;
  state?: number;
  company?: Company;
  searched?: boolean;
}


export interface SearchCustomer {
  document_type: string,
  document_number: string
}
