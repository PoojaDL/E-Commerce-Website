import "./App.css";
import { Route, Redirect } from "react-router-dom";
import React, { Suspense, useContext } from "react";
import AuthContext from "./Store/auth-content";

const HomePage = React.lazy(() => import("./Components/HomePage/HomePage"));
const Contact = React.lazy(() => import("./Components/ContactUs/Contact"));
const Storepage = React.lazy(() => import("./Components/StorePage/Storepage"));
const ProductDetails = React.lazy(() =>
  import("./Components/Body/ProductDetails")
);
const Login = React.lazy(() => import("./Components/LoginPage/Login"));
const About = React.lazy(() => import("./Components/About/About"));

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <main>
          <Route path="/" exact>
            {!authCtx.isLoggedIn ? (
              <Redirect to="/Login" />
            ) : (
              <Redirect to="/Store" />
            )}
          </Route>

          <Route path="/Login">
            <Login />
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/Store" exact>
              <Storepage />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/About">
              <About />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/Home">
              <HomePage />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/ContactUs">
              <Contact />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/Store/product/:id">
              <ProductDetails />
            </Route>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="*">
              <Redirect to="/Login" />
            </Route>
          )}
        </main>
      </Suspense>
    </div>
  );
}

export default App;
