import { useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import styles from "./NavContent.module.css";
import axios from "axios";
import AuthContext from "../../Store/auth-content";

const NavContent = (props) => {
  const authCtx = useContext(AuthContext);
  let token;
  if (authCtx.isLoggedIn) {
    token = authCtx.token;
    if (typeof token === "string") {
      token = JSON.parse(authCtx.token);
    }
  }
  const email = token.email.replace(/[^a-z0-9]/gi, "");

  const [count, setCount] = useState(null);
  let add = props.count;
  const countChange = useCallback(() => {
    axios
      .get(
        `https://crudcrud.com/api/080149f7f02649bf861b3b8e25634122/UserList${email}`
      )
      .then((res) => {
        setCount(res.data.length);
        // eslint-disable-next-line
        add;
      })
      .catch((error) => alert(error.message));
  }, [email, add]);

  useEffect(() => {
    countChange();
  }, [countChange]);

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
              Cart <b color="red">{count}</b>
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavContent;
