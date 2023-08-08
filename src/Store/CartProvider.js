import { useState } from "react";
import cartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    setCart((prevState) => [...prevState, item]);
  };

  const values = {
    items: cart,
    totalAmount: cart.totalAmount,
    addItem: onAdd,
  };

  return (
    <cartContext.Provider value={values}>{props.children}</cartContext.Provider>
  );
};

export default CartProvider;
