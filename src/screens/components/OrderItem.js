import React from "react";
import moment from "moment";

export const OrderItem = ({ uid, i, tiempo }) => {
  return (
    <div>
      <h2>Pedido n°{i + 1} </h2>
      <h4>Pedido de: {uid} </h4>
      <p>Fecha: {moment(tiempo).format("MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};
