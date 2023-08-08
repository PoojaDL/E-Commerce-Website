import { Container } from "react-bootstrap";
import styles from "./CartContent.module.css";
import CartList from "./CartList";

const CartContent = () => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <div className={`${styles["cart-body"]}`}>
      <Container className="text-center py-3">
        <h2>Cart</h2>
      </Container>
      <table>
        <thead>
          <th className="pe-3">ITEM</th>
          <th className="pe-3">PRICE</th>
          <th className="me-3">QUANTITY</th>
        </thead>
        {cartElements.map((item) => (
          <CartList
            imgUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </table>
    </div>
  );
};

export default CartContent;
