export interface Product {
    id: string,
    category: string,
    items: ProductItem[]
}

export interface ProductItem {
    id?: string,
    name: string,
    image: string,
    price: number,
    amount?: number;
    gram?: number,
    ingredience?: string[]
}