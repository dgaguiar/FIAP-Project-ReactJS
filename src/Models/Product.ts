import { ProductInfo } from "./ProductInfo";

export interface Product {
    totalItems: Number,
    page: Number,
    perPage: Number,
    products: [ProductInfo]
};