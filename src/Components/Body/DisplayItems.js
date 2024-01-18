import { Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import classes from "./BodyItems.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../Store/auth-content";
import axios from "axios";

const DisplayItems = (props) => {
  const authCtx = useContext(AuthContext);
  let token;
  if (authCtx.isLoggedIn) {
    token = authCtx.token;
    if (typeof token === "string") {
      token = JSON.parse(authCtx.token);
    }
  }
  const email = token.email.replace(/[^a-z0-9]/gi, "");

  const list = {
    title: props.title,
    img: props.img,
    price: props.price,
    quantity: 1,
  };

  const addCartItem = () => {
    axios
      .post(
        `https://martincartitems-default-rtdb.firebaseio.com/UserList${email}.json`,
        list
      )
      .then(() => {
        props.add();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Col md={6} className="d-inline  mt-5">
      <div className="text-center">
        <h3>{props.title}</h3>
      </div>
      <Card style={{ width: "18rem" }} className="ms-auto me-auto">
        <Link to={`Store/product/p${props.index}`}>
          <Card.Img
            className={classes.image}
            variant="top"
            src={props.img}
            alt="item-img"
          />
        </Link>
        <Card.Body>
          <p className="d-inline pe-5 me-5">{`$${props.price}`}</p>
          <Button
            className="ms-2 btn-secondary"
            variant="primary"
            onClick={addCartItem}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayItems;
