import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../actions/auth";
import { useForm } from "../hooks/useForm";
import { Header } from "./components/Header";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    email: "leav98@gmail.com",
    password: "leav98",
  });
  const { email, password } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
    console.log("submit");
  };
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <Header />
      <div className="auth-screen">
        <form onSubmit={handleSubmit} className="auth__form">
          <h2 className="auth__title">Iniciar Sesión</h2>

          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Correo"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form-control w-100"
            />
          </div>
          <div className="form-group w-100">
            <input
              type="text"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="form-control w-100"
            />
          </div>
          <div className="auth__input-group">
            <input
              type="submit"
              value="Ingresar"
              className="btn btn-success py-1 px-4"
            />
          </div>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <div className="btn-text">
              <p>Iniciar Sesión con Google</p>
            </div>
          </div>
          <p className="auth-register">
            Eres Nuevo, entonces <Link to="/register">Registrate Aquí</Link>
          </p>
        </form>
      </div>
    </>
  );
};
