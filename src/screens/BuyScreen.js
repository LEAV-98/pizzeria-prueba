import React from "react";
import { useSelector } from "react-redux";
import { BuyInvitated } from "./components/BuyInvitated";
import { BuyUser } from "./components/BuyUser";
import { Header } from "./components/Header";

export const BuyScreen = () => {
  const { auth } = useSelector((state) => state);

  return (
    <>
      <Header />
      {auth.uid ? <BuyUser /> : <BuyInvitated />}
    </>
  );
};
