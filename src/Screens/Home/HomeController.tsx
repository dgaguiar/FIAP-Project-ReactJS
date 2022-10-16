import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeView from "./HomeView";

export default function HomeController() {
    let navigate = useNavigate();

    const onBackButton = () => {
      navigate(-1);
    };

    const onProductsButton = () => {
        navigate("produtos/", {
            state: { 
                logout: {onBackButton}
            },
          });
      };
    
    const onDetailButton = () => {
        navigate("detalhesDoProduto/", {
            state: { },
        });
    };

    const onRegistrationButton = () => {
        navigate("cadastro/", {
            state: { },
        });
    };

    const onFavoriteButton = () => {
        navigate("favoritos/", {
            state: { },
        });
    };

   return <HomeView 
            logOut={onBackButton} 
            goToDetail={onDetailButton} 
            goToFavorite={onFavoriteButton} 
            goToProducts={onProductsButton}
            goToRegistration={onRegistrationButton}/>  
}