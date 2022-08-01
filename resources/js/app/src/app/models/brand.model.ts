import { Company } from "./company.model";

export interface Brand {
  id?: number;
  company_id?: number;
  name: string;
  state: number;
  state_name?: string;
  company?: Company;
}
