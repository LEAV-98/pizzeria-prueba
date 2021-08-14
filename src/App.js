import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./store/store";
import "./styles/styles.scss";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
