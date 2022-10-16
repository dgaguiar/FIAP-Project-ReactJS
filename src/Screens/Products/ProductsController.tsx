import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsView from "./ProductsView";
import { FormikHelpers } from "formik";
import { AxiosError } from "axios";
import auth from "../../Services/APIs/Products/Products";
import useAPI, { useApiReturnType } from "../../Services/APIs/Common/useAPI";
import { Products } from "../../Models/Product";

export type FormProductType = {
  perPage: Number;
};

export default function ProductsController() {
  const authLoginAPI: useApiReturnType = useAPI(auth.products);
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
      .then((info: Products) => {
        console.log(info);
        setIsLoading(false);
        // context.makeLogin({
        //   userId: info.userId,
        //   name: info.name,
        //   token: info.token,
        //   phone: info.phone
        // });
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
   return <ProductsView logout={onBackButton}/>  
}