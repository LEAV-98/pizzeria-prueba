import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../screens/LoginScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import { PrincipalScreen } from "../screens/PrincipalScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { UserScreen } from "../screens/user/UserScreen";
import { AdminRoute } from "./AdminRoute";
import { PrivateRoute } from "./PrivateRoute";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { ShoppingCartScreen } from "../screens/ShoppingCartScreen";
import { BuyScreen } from "../screens/BuyScreen";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

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
  }, [dispatch]);
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/login" component={LoginScreen} /> */}
          <PublicRoute
            path="/login"
            component={LoginScreen}
            isAuthenticated={isLoggedIn}
          />
          <PublicRoute
            path="/register"
            component={RegisterScreen}
            isAuthenticated={isLoggedIn}
          />
          {/* <Route exact path="/register" component={RegisterScreen} /> */}
          <Route exact path="/products" component={ProductsScreen} />
          <Route exact path="/shopping" component={ShoppingCartScreen} />
          <Route path="/buy" component={BuyScreen} />
          <Route path="/admin" component={AdminRoute} />
          {/* Rutas para el admon --algun dia quiza :v */}
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            path="/user"
            component={UserScreen}
          />
          {/* <Route exact path="/user" component={UserScreen} /> */}
          {/* exact hijo de prra v:< */}
          <Route exact path="/" component={PrincipalScreen} />
          <Route path="*" component={NotFoundScreen} />
        </Switch>
      </div>
    </Router>
  );
};
