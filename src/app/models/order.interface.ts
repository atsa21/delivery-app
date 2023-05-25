import { ProductItem } from "./product.interface";
import { User } from "./user.interface";

export interface Order {
    client: User,
    order: ProductItem[],
    comment: string,
    totalPrice: number
}