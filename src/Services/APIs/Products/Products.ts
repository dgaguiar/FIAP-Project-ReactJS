import api from "../Common/api";

const products = (data: any) => api.post("/storeProducts/", data);

export default {
    products
};