import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductsView from "./ProductsView";
import { FormikHelpers } from "formik";
import { AxiosError } from "axios";
import auth from "../../Services/APIs/Products/Products";
import useAPI, { useApiReturnType } from "../../Services/APIs/Common/useAPI";
import { Product } from "../../Models/Product";
import ProductContext, { ProductContextType } from "../../Store/Product/ProductContext";

export type FormProductType = {
  perPage: Number;
};

export default function ProductsController() {
  const authLoginAPI: useApiReturnType = useAPI(auth.products);
  const context = useContext<ProductContextType>(ProductContext);
  const [connectMessage, setConnectMessage] = useState<string>("");
  const [connectCode, setConnectCode] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (
    values: FormProductType,
    formikHelpers: FormikHelpers<FormProductType>
  ) => {
    console.log(values);

    let infoSend = {
      perPage: values.perPage,
    };

    setIsLoading(true);
    authLoginAPI
      .requestPromise(infoSend)
      .then((info: Product) => {
        console.log(info);
        setIsLoading(false);
        context.getProduct({
          page: info.page,
          perPage: info.perPage,
          totalItems: info.totalItems,
          products: info.products
        })
        setConnectMessage("Success products");
      })
      .catch((error: AxiosError) => {
        setIsLoading(false);
        setConnectCode(-1);
        if (error.response?.status === 401) {
          setConnectMessage("Usuário e senha não encontrados");
        } else {
          setConnectMessage("O servidor retornou um erro= " + error.message);
        }
      });
  };
    let navigate = useNavigate();

    const onBackButton = () => {
      navigate(-1);
    };
   return <ProductsView logout={onBackButton} product={context.product} statusConnection={200} />  
}