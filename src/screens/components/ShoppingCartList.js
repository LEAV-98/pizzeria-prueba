import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCartList = () => {
  const { shoppingCart } = useSelector((state) => state);
  const [cantidad, setCantidad] = useState(0);
  const [precioTotal, setprecioTotal] = useState(0);
  useEffect(() => {
    let num = 0;
    let pric = 0;
    shoppingCart.forEach(({ cantidad, price }) => {
      num = num + cantidad;
      pric = pric + price * cantidad;
    });
    setCantidad(num);
    setprecioTotal(pric);
  }, [shoppingCart]);
  return (
    <div className="shoppingCart ">
      <div className="shoppingCartList animate__animated  animate__fadeInLeft">
        {shoppingCart.map((product, id) => (
          <ShoppingCartItem {...product} key={id} />
        ))}
      </div>

      <div className="orders animate__animated  animate__fadeInBottomLeft">
        <h3>Tu Pedido</h3>
        <p>Cantidad de item: {cantidad}</p>
        <p>Total a pagar: ${precioTotal}</p>
        <Link to="/buy" className="buyButton">
          Pedir
        </Link>
      </div>
    </div>
  );
};
