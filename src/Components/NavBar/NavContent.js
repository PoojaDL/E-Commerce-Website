import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import cartContext from "../../Store/cart-context";
import styles from "./NavContent.module.css";

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
          <Link className={styles.navLink} to="/Home" onClick={styles.onclick}>
            HOME
          </Link>
          <Link className={styles.navLink} to="/">
            STORE
          </Link>
          <Link className={styles.navLink} to="/About">
            ABOUT
          </Link>
        </Nav>
        {props.onclick && (
          <Nav className="justify-content-end">
            <Button onClick={clicked}>
              Cart <b color="red">{ctx.items.length}</b>
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavContent;
