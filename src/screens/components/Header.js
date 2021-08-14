import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { firebase } from "./../../firebase/firebase-config";
import { login } from "../../actions/auth";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export const Header = () => {
  const dispatch = useDispatch();
  const { shoppingCart, auth } = useSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogout = () => {
  //   dispatch(startLogout());
  // };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      // console.log(isLoggedIn);
    });
    return () => {
      setIsLoggedIn(false);
    };
  }, [dispatch]);
  useEffect(() => {
    // console.log([...shoppingCart]);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-ul">
          <li>
            <Link to="/" className="link-item">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/products" className="link-item">
              Tienda
            </Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/login" className="link-item">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to="/register" className="link-item">
                  Registrate
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/user" className="link-item">
                  Bienvenido {auth.name}
                </Link>
              </li>
              {/* <li>
                <button onClick={handleLogout}>Cerrar Sesión</button>
              </li> */}
            </>
          )}
          <li>
            <Link to="/shopping" className="link-item shopping">
              <ShoppingCartIcon fontSize="large" />
              <p> {shoppingCart.length}</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
