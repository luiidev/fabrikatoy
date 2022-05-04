import { Company } from "./company.model";

export interface Provider {
  id?: number;
  company_id?: number;
  ruc: string;
  name: string;
  address: string;
  website?: string|null;
  state: number;
  company?: Company;
}
