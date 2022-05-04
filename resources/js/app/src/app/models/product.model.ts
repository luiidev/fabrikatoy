import { Brand } from "./brand.model";
import { Company } from "./company.model";
import { Provider } from "./provider.model";

export interface Product {
  id?: number;
  company_id?: number;
  brand_id?: number;
  code: string;
  name: string;
  quantity?: number;
  price?: string;
  higher_price?: string;
  average_price?: string;
  state: number;
  state_name?: string;
  unit?: {
    name: string;
  },
  providers: Provider[],
  company?: Company,
  brand?: Brand,
}

export default class ProductRequest {
  static data(product: Product) {
    let data:any = {
      company_id: product.company_id,
      brand_id: product.brand_id,
      code: product.code,
      name: product.name,
      state: product.state,
      providers: product.providers.map((p) => p.id),
    };

    if (product.id) {
      data.id = product.id;
    }

    return data;
  }
}
