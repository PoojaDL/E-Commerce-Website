import React, { useState } from "react";
import NavContent from "../NavBar/NavContent";
import HeadContent from "../Header/HeadContent";
import BodyItems from "../Body/BodyItems";
import FooterContent from "../Footer/FooterContent";
import CartContent from "../Cart/CartContent";
import CartProvider from "../../Store/CartProvider";

const Storepage = () => {
  const [cart, setCart] = useState(false);
  const openCart = (open) => {
    setCart(open);
  };

  const closeCart = (close) => {
    setCart(close);
  };

  const productsArr = [
    {
      id: "p0",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "p1",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "p2",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "p3",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [count, setCount] = useState(false);
  const countChange = () => {
    setCount((prev) => !prev);
  };

  const countItems = (t) => {
    setCount((prev) => !prev);
  };

  return (
    <CartProvider>
      <NavContent count={count} onclick={openCart} />
      {cart && <CartContent onChange={countItems} onclick={closeCart} />}
      <HeadContent />
      <BodyItems add={countChange} items={productsArr} onclick={openCart} />
      <FooterContent />
    </CartProvider>
  );
};

export default Storepage;
