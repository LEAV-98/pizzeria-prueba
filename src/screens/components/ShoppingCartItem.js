import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../actions/shoppingCart";

export const ShoppingCartItem = ({ name, uid, price, imagenUrl, cantidad }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteProduct(uid));
  };
  return (
    <div className="shoppingCartItem">
      <p>
        Nombre del producto <br />
        {name}
      </p>
      <div className="cont-img">
        <img src={imagenUrl} alt="pizza" />
      </div>
      <p>
        Precio
        <br /> ${price}
      </p>
      <p>
        Cantidad <br />
        {cantidad}
      </p>
      <button onClick={handleDeleteItem} className="deleteButton">
        Eliminar
      </button>
    </div>
  );
};
