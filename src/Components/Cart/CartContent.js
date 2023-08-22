import { Button, Container } from "react-bootstrap";
import styles from "./CartContent.module.css";
import CartList from "./CartList";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Store/auth-content";

const CartContent = (props) => {
  const [cartElements, setCart] = useState([]);
  // const [call, setCall] = useState(false);
  const authCtx = useContext(AuthContext);
  let token;
  if (authCtx.isLoggedIn) {
    token = authCtx.token;
    if (typeof token === "string") {
      token = JSON.parse(authCtx.token);
    }
  }
  const email = token.email.replace(/[^a-z0-9]/gi, "");
  let totalCost = 0;

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/080149f7f02649bf861b3b8e25634122/UserList${email}`
      )
      .then((res) => {
        setCart(res.data);
      })
      .catch((error) => console.log(error.message));
  }, [email, props]);
  cartElements.map((item) => (totalCost += +item.price));

  const close = () => {
    props.onclick(false);
  };

  const removeItem = (key) => {
    axios
      .delete(
        `https://crudcrud.com/api/080149f7f02649bf861b3b8e25634122/UserList${email}/${key}`
      )
      .then((res) => {
        if (res.statusText === "OK") {
          let leftItems = cartElements.filter((item) => item._id !== key);
          setCart(leftItems);
          props.onChange();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
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
            remItem={removeItem}
            item={item}
            key={item._id}
            imgUrl={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </table>

      <div className="pb-5">
        <h3>Total : {totalCost}</h3>
      </div>
    </div>
  );
};

export default CartContent;
