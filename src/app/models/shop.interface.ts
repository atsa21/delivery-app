import { Product } from "./product.interface";

export interface Shop {
    id: string,
    name: string,
    image: string,
    products?: Product[],
    selected?: boolean
}