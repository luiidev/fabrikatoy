import { Company } from "./company.model";

export interface Customer {
  id?: number;
  company_id?: number;
  document_type: string | null;
  document_number: string | null;
  name: string;
  address?: string;
  email?: string;
  phone?: string;
  state: number;
  company?: Company;
}

export default class CustomerRequest {
  static data(customer: Customer) {
    const data: any = {
      name: customer.name,
      state: customer.state,
    };

    if (customer.company_id) {
      data.company_id = customer.company_id;
    }

    if (customer.id) {
      data.id = customer.id;
    }

    return data;
  }
}
