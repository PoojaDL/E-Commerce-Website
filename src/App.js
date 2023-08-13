import "./App.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Storepage from "./Components/StorePage/Storepage";
import Contact from "./Components/ContactUs/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Storepage /> },
  { path: "/About", element: <About /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/ContactUs", element: <Contact /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
