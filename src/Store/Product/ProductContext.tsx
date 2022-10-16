import { type, userInfo } from "os";
import { Context, createContext } from "react";
import { Product } from "../../Models/Product";
import { ProductInfo } from "../../Models/ProductInfo"

export type ActionProps = {
    type: string;
    payload: any;
};

export type ProductContextType = {
    product: Product;
    getProduct: (product: Product) => void;
};

const mockProduct: [ProductInfo] = [
    {
        _id:0,
        name: "",
        favorite: true,
        price: ""
    }
]

const ProductContext: Context<ProductContextType> =
    createContext<ProductContextType>({
        product: {
            totalItems: 0,
            page: 0,
            perPage: 0,
            products: mockProduct
        },
        getProduct: (product: Product) => { },
    });

export default ProductContext;