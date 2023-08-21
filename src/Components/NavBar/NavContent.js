import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import cartContext from "../../Store/cart-context";
import styles from "./NavContent.module.css";
import AuthContext from "../../Store/auth-context";

const NavContent = (props) => {
  const authCtx = useContext(AuthContext);
  const ctx = useContext(cartContext);
  const clicked = () => {
    props.onclick(true);
  };

  const logoutHandler = () => {
    authCtx.logout();
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
          {authCtx.isLoggedIn && (
            <NavLink
              className={styles.navLink}
              to="/Home"
              activeClassName={styles.active}
            >
              HOME
            </NavLink>
          )}
          {authCtx.isLoggedIn && (
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              to="/Store"
            >
              STORE
            </NavLink>
          )}
          {authCtx.isLoggedIn && (
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              to="/About"
            >
              ABOUT
            </NavLink>
          )}
          {authCtx.isLoggedIn && (
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              to="/ContactUs"
            >
              CONTACTUS
            </NavLink>
          )}
          <NavLink
            className={styles.navLink}
            activeClassName={styles.active}
            to="/Login"
            onClick={logoutHandler}
          >
            LOGOUT
          </NavLink>
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
