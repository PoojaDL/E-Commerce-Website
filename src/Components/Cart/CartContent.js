import { Button, Container } from "react-bootstrap";
import styles from "./CartContent.module.css";
import CartList from "./CartList";
import cartContext from "../../Store/cart-context";
import { useContext } from "react";

const CartContent = (props) => {
  const ctx = useContext(cartContext);
  let totalCost = 0;
  const cartElements = ctx.items;
  cartElements.map((item) => (totalCost += +item.price));
  ctx.totalAmount = totalCost;

  const close = () => {
    props.onclick(false);
  };

  return (
    <div className={`${styles["cart-body"]}`} align="center">
      <div align="right">
        <Button onClick={close} className="mt-3 btn-dark">
          Close
        </Button>
      </div>

      <Container className="pb-3 gx-5">
        <h2 className="d-inline">Cart</h2>
      </Container>
      <table>
        <tr>
          <th className="pe-3">ITEM</th>
          <th className="pe-3">PRICE</th>
          <th className="me-3">QUANTITY</th>
        </tr>
        {cartElements.map((item) => (
          <CartList
            key={item.img}
            imgUrl={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </table>

      <div>
        <h3>Total : {ctx.totalAmount}</h3>
      </div>
    </div>
  );
};

export default CartContent;
