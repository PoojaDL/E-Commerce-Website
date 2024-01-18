import { Container } from "react-bootstrap";

const FooterContent = () => {
  return (
    <div
      style={{
        backgroundColor: "#666633",
        height: 100,
        width: "100%",
        position: "fixed",
        bottom: "0px",
      }}
    >
      <Container>
        <div align="center">
          <h1 className="display-3">Mart In Cart</h1>
          <p align="center">MadeByPooja © 2023</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;
