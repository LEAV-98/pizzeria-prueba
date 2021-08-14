import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startRegisterWithEmailPasswordName } from "../actions/auth";
import { useForm } from "../hooks/useForm";
import { Header } from "./components/Header";
import Swal from "sweetalert2";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
    rPassword: "",
    name: "",
  });
  const { email, password, rPassword, name } = values;
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register");
    if (email === "" || password === "" || rPassword === "" || name === "") {
      console.log("vacio");
      Swal.fire("Error", "Campos vacíos", "error");

      return;
    }
    if (password !== rPassword) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }
    dispatch(startRegisterWithEmailPasswordName(email, password, name));
  };
  return (
    <>
      <Header />
      <div className="auth-screen">
        <form onSubmit={handleRegister} className="auth__form">
          <h2>Registrate</h2>
          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Correo"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="form-control "
            />
          </div>
          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Repite Contraseña"
              name="rPassword"
              value={rPassword}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Registrar"
              className="btn btn-success"
            />
          </div>
          <p className="auth-register">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión Aquí</Link>
          </p>
        </form>
      </div>
    </>
  );
};
