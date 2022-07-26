import { Company } from "./company.model";

export interface Brand {
  id?: number;
  company_id?: number;
  name: string;
  state: number;
  company?: Company;
}

export default class BrandRequest {
  static data(brand: Brand) {
    let data:any = {
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
