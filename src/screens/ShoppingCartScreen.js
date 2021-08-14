import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { deleteAll } from "../actions/shoppingCart";
import { Header } from "./components/Header";
import { ShoppingCartList } from "./components/ShoppingCartList";

export const ShoppingCartScreen = () => {
  const { shoppingCart } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const handleDeleteAll = () => {
  //   dispatch(deleteAll());
  // };
  useEffect(() => {
    // console.log([...shoppingCart]);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);
  return (
    <div>
      <Header />
      {shoppingCart.length > 0 ? (
        <ShoppingCartList />
      ) : (
        "No hay elementos en el carrito"
      )}
      {/* <button onClick={handleDeleteAll}>Eliminar Todo</button> */}
    </div>
  );
};
