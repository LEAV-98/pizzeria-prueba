import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/shoppingCart";

export const ProductItem = ({ id, title, imagenUrl, precio, description }) => {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(addProduct(id, title, precio, imagenUrl));
  };
  return (
    <div className="product-item animate__animated  animate__fadeIn">
      <h2>{title}</h2>
      <h3>${precio}</h3>
      <p>{description}</p>
      <img src={imagenUrl} alt="img" />
      <button onClick={handleAddProduct}>Añadir al carrito</button>
    </div>
  );
};
