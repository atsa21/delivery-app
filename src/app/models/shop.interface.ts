import { Product } from "./product.interface";

export interface Shop {
    id?: string,
    name: string,
    category: string,
    product: Product[]
}