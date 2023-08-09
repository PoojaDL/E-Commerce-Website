import "./App.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/About", element: <About /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
