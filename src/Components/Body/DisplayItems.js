import { Col, Card, Button } from "react-bootstrap";
import cartContext from "../../Store/cart-context";
import { useContext } from "react";
import classes from "./BodyItems.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DisplayItems = (props) => {
  const ctx = useContext(cartContext);
  const addCartItem = () => {
    ctx.addItem({
      title: props.title,
      img: props.img,
      price: props.price,
      quantity: 1,
    });
  };

  return (
    <Col md={6} className="d-inline">
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
        <Card.Body className="">
          <p className="d-inline pe-5 me-5">{`$${props.price}`}</p>
          <Button className="ms-2" variant="primary" onClick={addCartItem}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayItems;
