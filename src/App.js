import "./App.css";
import React from "react";
import NavContent from "./Components/NavBar/NavContent";
import HeadContent from "./Components/Header/HeadContent";
import BodyItems from "./Components/Body/BodyItems";
import FooterContent from "./Components/Footer/FooterContent";
import CartContent from "./Components/Cart/CartContent";

function App() {
  const openCart = (open) => {
    console.log(open);
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
    <React.Fragment>
      <NavContent onclick={openCart} />
      <CartContent />
      <HeadContent />
      <BodyItems items={productsArr} />
      <FooterContent />
    </React.Fragment>
  );
}

export default App;
