import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailView from "./DetailView";

export default function DetailController() {
    let navigate = useNavigate();

    const onBackButton = () => {
      navigate(-1);
    };
   return <DetailView logout={onBackButton}/>  
}