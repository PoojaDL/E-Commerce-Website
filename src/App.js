import "./App.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Storepage from "./Components/StorePage/Storepage";

const router = createBrowserRouter([
  { path: "/", element: <Storepage /> },
  { path: "/About", element: <About /> },
  { path: "/Home", element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
