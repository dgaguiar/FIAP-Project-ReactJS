import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsView from "./ProductsView";

export default function ProductsController() {
    let navigate = useNavigate();

    const onBackButton = () => {
      navigate(-1);
    };
   return <ProductsView logout={onBackButton}/>  
}