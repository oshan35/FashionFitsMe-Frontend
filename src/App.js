import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Product, Catogeries,Cart,CheckoutPage,CheckoutTest, OrderSummary} from "./pages";
import { CataloguePage ,OrderSummaryPage} from "./pages";
import { SelectedFiltersProvider } from "./Contexts/SelectedFilterContext";
import { PriceCardNew } from "./components";
import {LoginPage,SignupPage} from "./pages"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/catogeries",
    element: <CataloguePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/orderSummary",
    element: <OrderSummaryPage />,
  },

  {
    path: "/checkout",
    element: <CheckoutPage />,
  },

  {
    path: "/login",
    element: <LoginPage/>,
  },

  {
    path: "/signup",
    element: <SignupPage/>,
  }
]);

const App = () => {
  return (
    <>
    <SelectedFiltersProvider>
     <RouterProvider router={router} />;
  </SelectedFiltersProvider></>

  )
 
 
};

export default App;
