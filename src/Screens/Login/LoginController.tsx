import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import LoginView from "./LoginView";


export default function LoginController() {
  const navigate: NavigateFunction = useNavigate();

  const goToHome = () => {
    navigate("home/", {
      state: { },
    });
  };
  return <LoginView goToHome={goToHome} />;
}