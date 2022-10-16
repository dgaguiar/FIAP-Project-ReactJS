import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginController from "../Screens/Login/LoginController";
import HomeController from "../Screens/Home/HomeController";
import ProductsController from "../Screens/Products/ProductsController";
import DetailController from "../Screens/Detail/DetailController";
import FavoriteController from "../Screens/Favorite/FavoriteController";
import RegistrationController from "../Screens/Registration/RegistrationController";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="home" element={<HomeController />} />
      <Route path="produtos" element={<ProductsController/>} />
      <Route path="detalhesDoProduto" element={< DetailController/>} />
      <Route path="favoritos" element={<FavoriteController/>} />
      <Route path="cadastro" element={<RegistrationController/>} />
    </Routes>
  );
};

export default routes;