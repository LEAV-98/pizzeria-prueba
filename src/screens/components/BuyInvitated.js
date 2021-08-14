import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { firebase } from "./../../firebase/firebase-config";
import { deleteAll } from "../../actions/shoppingCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const BuyInvitated = () => {
  const { shoppingCart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    dni: "76955812",
    nombre: "luis avila",
    direccion: "123",
    referencia: "333",
    telefono: "222",
  });
  const { dni, nombre, direccion, referencia, telefono } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    // firebase.firestore().collection(dni).add({
    //   uid: dni,
    //   name: nombre,
    //   direccion,
    //   referencia,
    //   telefono,
    //   pedido: shoppingCart,
    //   tiempo: Date.now(),
    // });
    firebase.firestore().collection(`orders`).add({
      uid: dni,
      name: nombre,
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
        "Pero llena tu carrito de compras pndejo "
      ) : (
        <div>
          <p>
            <Link to="/login">Inicia Sesión</Link> o pide tu pedido como
            invitado:
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="DNI"
                  name="dni"
                  value={dni}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nombres y Apellidos"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Tu Dirección"
                  name="direccion"
                  value={direccion}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Una Referencia"
                  name="referencia"
                  value={referencia}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Tu Telefono"
                  name="telefono"
                  value={telefono}
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
