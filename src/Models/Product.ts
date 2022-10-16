export interface Products {
    totalItems: Number,
    page: Number,
    perPage: Number,
    products: [Product]
};

export interface Product {
    _id: Number,
    name: string,
    price: string,
    favorite: boolean
}