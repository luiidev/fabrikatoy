import { Company } from "./company.model";

export interface BranchOffice {
  id?: number;
  company_id?: number | null;
  name: string;
  state: number;
  state_name?: string;
  company?: Company
}
