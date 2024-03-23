import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Product, Catogeries,Cart,CheckoutPage,CheckoutTest, OrderSummary} from "./pages";
import { CataloguePage } from "./pages";
import { SelectedFiltersProvider } from "./Contexts/SelectedFilterContext";
import { PriceCardNew } from "./components";
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
