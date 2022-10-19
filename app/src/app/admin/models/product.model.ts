import { Brand } from "./brand.model";
import { Category } from "./category.model";
import { Company } from "./company.model";
import { Provider } from "./provider.model";
import { Unit } from "./unit.model";

export interface Product {
  id?: number;
  company_id?: number;
  brand_id?: number;
  unit_id?: number;
  code: string;
  name: string;
  image?: string;
  quantity?: number;
  quantity_sale?: number;
  subtotal?: number;
  price?: number;
  higher_price?: string;
  average_price?: string;
  state: number;
  state_name?: string;
  unit?: Unit,
  providers?: Provider[],
  categories?: Category[],
  company?: Company,
  brand?: Brand,
  providers_id?: number[],
}

export interface ProductFilter {
  search: string | null,
  category_id: number | null
}
