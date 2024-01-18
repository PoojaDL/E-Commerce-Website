import { Container, Row, Button } from "react-bootstrap";
import DisplayItems from "./DisplayItems";

const BodyItems = (props) => {
  const openCart = () => {
    props.onclick(true);
  };

  const itemAdded = () => {
    props.add();
  };

  return (
    <div style={{ background: "#eeeedd", paddingBottom: "5rem" }}>
      <Container>
        <div className="text-center m-0 pt-3">
          <h1>Items</h1>
        </div>
        <Row className="gy-4 mt-2 gx-0">
          {props.items.map((item, index) => (
            <DisplayItems
              add={itemAdded}
              index={index}
              key={item.imageUrl}
              img={item.imageUrl}
              title={item.title}
              price={item.price}
            ></DisplayItems>
          ))}
        </Row>
        <div align="center" className="my-5">
          <Button
            onClick={openCart}
            className="ms-2 btn-secondary btn-lg"
            variant="primary"
          >
            See The Cart
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default BodyItems;
