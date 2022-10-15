import React, { useEffect, useState } from "react";
import useAPI from "../../Services/APIs/Common/useAPI";
import persons from "../../Services/APIs/Persons/Persons";
import LoginView from "./LoginView";

export default function LoginController() {
  const [count, setCount] = useState(0);
  const getPersonsGetAPI = useAPI(persons.getPersons);
  const getPersonsPostAPI = useAPI(persons.getPersonsPost);

  useEffect(() => {
    const timer = setInterval(() => {
      //functional update
      setCount((count) => count + 1);
    }, 3000);

    getPersonsGetAPI.request(1);
    getPersonsPostAPI.request({
      title: "L",
    });

    return () => {
      clearInterval(timer);
    };
  }, []);

  // console.log(getPersonsGetAPI.data);
  // console.log(getPersonsPostAPI.data);

  return <LoginView info={count} person={getPersonsGetAPI.data} />;
}