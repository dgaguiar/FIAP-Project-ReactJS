import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationView from "./RegistrationView";

export default function RegistrationController() {
    let navigate = useNavigate();

    const onBackButton = () => {
      navigate(-1);
    };
    
    return <RegistrationView logout={onBackButton}/>  
}