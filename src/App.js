import "./App.css";
import About from "./Components/About/About";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Storepage from "./Components/StorePage/Storepage";
import Contact from "./Components/ContactUs/Contact";
import ProductDetails from "./Components/Body/ProductDetails";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

// const router = createBrowserRouter([
//   { path: "/", element: <Storepage /> },
//   { path: "/About", element: <About /> },
//   { path: "/Home", element: <HomePage /> },
//   { path: "/ContactUs", element: <Contact /> },
// ]);

function App() {
  return (
    <div>
      <main>
        <Route path="/" exact>
          <Redirect to="/Store"></Redirect>
        </Route>
        <Route path="/Store" exact>
          <Storepage />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Home">
          <HomePage />
        </Route>
        <Route path="/ContactUs">
          <Contact />
        </Route>
        <Route path="/Store/product/:id">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
