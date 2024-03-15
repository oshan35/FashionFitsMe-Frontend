import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Product, Catogeries,CartPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/catogeries/:id",
    element: <Catogeries />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
