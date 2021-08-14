import React from "react";
import { OrderItem } from "./OrderItem";

export const OrdersList = ({ pedidos }) => {
  return (
    <div>
      {pedidos.map((pedidos, i) => (
        <OrderItem {...pedidos} key={`${pedidos}-${i}`} i={i} />
      ))}
    </div>
  );
};
