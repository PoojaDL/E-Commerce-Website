import { useState, useRef, useContext } from "react";
import classes from "./Login.module.css";
import AuthContext from "../../Store/auth-context";
import { useHistory } from "react-router-dom";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const history = useHistory();

  const emailInput = useRef();
  const passwordInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const emailEntered = emailInput.current.value;
    const passwordEntered = passwordInput.current.value;

    setLoad(true);
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8wHsJTe8rHFeXPPHA5u0R9NWkWsuix3s";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailEntered,
        password: passwordEntered,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoad(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
        history.replace("/Store");
      })
      .catch((error) => alert(error));
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInput} />
        </div>
        <div className={classes.actions}>
          {load ? (
            <p style={{ color: "white" }}>Sending request...</p>
          ) : (
            <button>Login</button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Login;
