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
    <div>
      <Container>
        <div className="text-center m-4">
          <h1>Items</h1>
        </div>
        <Row className="gy-5 mt-3 gx-0">
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
            className="ms-2 btn-secondary"
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
