import { Col, Card, Button } from "react-bootstrap";

const DisplayItems = (props) => {
  return (
    <Col md={6} className="d-inline">
      <div className="text-center">
        <h3>{props.title}</h3>
      </div>
      <Card style={{ width: "18rem" }} className="ms-auto me-auto">
        <Card.Img variant="top" src={props.img} alt="item-img" />
        <Card.Body className="">
          <p className="d-inline pe-5 me-5">{`$${props.price}`}</p>
          <Button className="ms-2" variant="primary">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayItems;
