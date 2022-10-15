import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteView from "./FavoriteView";

export default function FavoriteController() {
    let navigate = useNavigate();

    const onBackButton = () => {
      navigate(-1);
    };
   return <FavoriteView logout={onBackButton}/>  
}