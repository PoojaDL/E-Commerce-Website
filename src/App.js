import "./App.css";
import React, { useState } from "react";
import NavContent from "./Components/NavBar/NavContent";
import HeadContent from "./Components/Header/HeadContent";
import BodyItems from "./Components/Body/BodyItems";
import FooterContent from "./Components/Footer/FooterContent";
import CartContent from "./Components/Cart/CartContent";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);
  const openCart = (open) => {
    setCart(open);
  };

  const closeCart = (close) => {
    setCart(close);
  };

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <CartProvider>
      <NavContent onclick={openCart} />
      {cart && <CartContent onclick={closeCart} />}
      <HeadContent />
      <BodyItems items={productsArr} onclick={openCart} />
      <FooterContent />
    </CartProvider>
  );
}

export default App;
