import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../actions/shoppingCart";
import { useForm } from "../../hooks/useForm";
import { firebase } from "./../../firebase/firebase-config";
import Swal from "sweetalert2";

export const BuyUser = () => {
  const { auth, shoppingCart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    direccion: "123",
    referencia: "333",
    telefono: "222",
  });
  const { direccion, referencia, telefono } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    // firebase.firestore().collection(auth.uid).add({
    //   uid: auth.uid,
    //   name: auth.name,
    //   direccion,
    //   referencia,
    //   telefono,
    //   pedido: shoppingCart,
    //   tiempo: Date.now(),
    // });
    firebase.firestore().collection(`orders`).add({
      uid: auth.uid,
      name: auth.name,
      direccion,
      referencia,
      telefono,
      pedido: shoppingCart,
      tiempo: Date.now(),
    });
    dispatch(deleteAll());
    Swal.fire({
      title: "Pedido Realizado",
      text: "Espere que nuestro motorizado le notificará cuando su pedido este listo",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
  };
  return (
    <div>
      {shoppingCart.length === 0 ? (
        "Llena tu carrito pndejo"
      ) : (
        <div>
          <p>Registra los siguientes campos para realizar tu pedido</p>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Tu Dirección"
                  value={direccion}
                  name="direccion"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Una Referencia"
                  value={referencia}
                  name="referencia"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Tu Telefono"
                  value={telefono}
                  name="telefono"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input type="submit" value="Realizar Pedido" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
