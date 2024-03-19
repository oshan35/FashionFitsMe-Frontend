import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Product, Catogeries,Cart,CheckoutPage,CheckoutTest } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product/>,
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
