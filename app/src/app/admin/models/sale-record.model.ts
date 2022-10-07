import { Customer } from "./customer.model";
import { Product } from "./product.model"

export interface SaleRecord {
  subtotal: number,
  discount: number,
  igv: number,
  total: number,
  products: Product[],
  customer: Customer
}
