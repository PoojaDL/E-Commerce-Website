import "./App.css";
import About from "./Components/About/About";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Storepage from "./Components/StorePage/Storepage";
import Contact from "./Components/ContactUs/Contact";
import ProductDetails from "./Components/Body/ProductDetails";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/LoginPage/Login";
import { useContext } from "react";
import AuthContext from "./Store/auth-context";

// const router = createBrowserRouter([
//   { path: "/", element: <Storepage /> },
//   { path: "/About", element: <About /> },
//   { path: "/Home", element: <HomePage /> },
//   { path: "/ContactUs", element: <Contact /> },
// ]);

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <main>
        <Route path="/" exact>
          <Redirect to="/Login"></Redirect>
        </Route>
        <Route path="/Login" exact>
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
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </main>
    </div>
  );
}

export default App;
