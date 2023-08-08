import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import cartContext from "../../Store/cart-context";

const NavContent = (props) => {
  const ctx = useContext(cartContext);
  const clicked = () => {
    props.onclick(true);
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      varient="dark"
      style={{ position: "sticky", top: 0, zIndex: 10 }}
    >
      <Container>
        <Nav className="ms-auto me-auto justify-content-center">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#link">STORE</Nav.Link>
          <Nav.Link href="#link">ABOUT</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Button onClick={clicked}>
            Cart <b color="red">{ctx.items.length}</b>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavContent;
