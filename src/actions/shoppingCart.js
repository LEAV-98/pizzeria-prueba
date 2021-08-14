import { types } from "../types/types";

export const addProduct = (uid, name, price, imagenUrl) => ({
  type: types.addProduct,
  payload: {
    uid,
    name,
    price,
    imagenUrl,
  },
});
export const deleteAll = () => ({
  type: types.deleteAll,
});
export const deleteProduct = (uid) => ({
  type: types.deleteProduct,
  payload: uid,
});
