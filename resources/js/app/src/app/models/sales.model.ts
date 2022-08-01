import { Customer } from "./customer.model";
import { Product } from "./product.model"

export interface Sale {
  subtotal: number,
  discount: number,
  igv: number,
  total: number,
  products: Product[],
  customer: Customer
}
