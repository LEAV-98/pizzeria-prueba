import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Header } from "../components/Header";
import { firebase } from "./../../firebase/firebase-config";
import { OrdersList } from "../components/OrdersList";
import { Loading } from "../components/Loading";

export const UserScreen = () => {
  const [loading, setLoading] = useState(false);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pedidos, setPedidos] = useState({});
  const handleLogout = () => {
    dispatch(startLogout());
  };
  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPedidos(newProducts.filter((product) => product.uid === auth.uid));
        setLoading(true);
      });
    return () => {
      setPedidos([]);
    };
  }, [auth.uid]);
  return (
    <div>
      <Header />
      <div className="orders-screen">
        {!loading ? <Loading /> : <OrdersList pedidos={pedidos} />}
        {pedidos.length === 0 && <p>No tiene pedidos</p>}
        <button
          onClick={handleLogout}
          className="btn-logout btn btn-danger"
          style={{ fontSize: "1.5rem" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
