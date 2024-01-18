import { Button, Container } from "react-bootstrap";
import styles from "./CartContent.module.css";
import CartList from "./CartList";
import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../Store/auth-content";

const CartContent = (props) => {
  const [cartElements, setCart] = useState([]);
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
        `https://martincartitems-default-rtdb.firebaseio.com/UserList${email}.json`
      )
      .then((res) => {
        // console.log(res);
        const items = [];
        for (const key in res.data) {
          const fetchedData = {
            key: key,
            img: res.data[key].img,
            price: res.data[key].price,
            quantity: res.data[key].quantity,
            title: res.data[key].title,
          };
          items.unshift(fetchedData);
        }
        setCart(items);
      })
      .catch((error) => {
        alert("there is a problem");
        console.log(error);
      });
  }, [email, props]);
  cartElements.map((item) => (totalCost += +item.price));

  const close = () => {
    props.onclick(false);
  };

  const removeItem = (key) => {
    axios
      .delete(
        `https://martincartitems-default-rtdb.firebaseio.com/UserList${email}/${key}.json`
      )
      .then((res) => {
        // console.log(res);
        if (res.statusText === "OK") {
          let leftItems = cartElements.filter((item) => item.key !== key);
          setCart(leftItems);
          props.onChange();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Fragment>
      <div className={styles["cart-body"]} align="center">
        <div align="right">
          <Button onClick={close} className="mt-3 me-3 btn-dark">
            Close
          </Button>
        </div>

        <Container className="pb-3 gx-5">
          <h2 className="d-inline">Cart</h2>
        </Container>
        <table className="m-auto">
          <tr align="center">
            <th>ITEM</th>
            <th className="pe-3">TITLE</th>
            <th className="pe-3">PRICE</th>
            <th>QUANTITY</th>
          </tr>
          {cartElements.map((item) => (
            <CartList
              remItem={removeItem}
              item={item}
              key={item.key}
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
    </Fragment>
  );
};

export default CartContent;
