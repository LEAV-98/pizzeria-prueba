import React, { useEffect, useState } from "react";
import { firebase } from "./../firebase/firebase-config";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { ProductList } from "./components/ProductList";

// firebase.firestore().collection("products").add({
//   title: "pizza2",
//   description: "lorem",
//   precio: 23,
// });
export const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { shoppingCart } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const { shoppingCart } = useSelector((state) => state);
  // console.log(shoppingCart);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(newProducts);
        setLoading(true);
      });
    return () => {
      setProducts([]);
    };
  }, []);

  // console.log(products);

  return (
    <>
      <Header />
      {loading ? <ProductList products={products} /> : <Loading />}
    </>
  );
};
