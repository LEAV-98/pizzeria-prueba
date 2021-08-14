import { types } from "../types/types";
const initShoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
export const shoppingCartReducer = (state = initShoppingCart, action) => {
  switch (action.type) {
    case types.addProduct:
      return [...state, { ...action.payload, cantidad: 1 }];
    case types.deleteProduct:
      const newShoppingCart = state.filter(
        (product) => product.uid !== action.payload
      );
      console.log(newShoppingCart);
      return newShoppingCart;
    case types.deleteAll:
      return [];

    default:
      return state;
  }
};
