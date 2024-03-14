import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import LandingPage from "./pages/landingpage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductListingPage from "./pages/ProductListingPage.jsx";
import ProductDescriptionPage from "./pages/ProductDescriptionPage.jsx";
import Cart from "./pages/Cart.jsx";
import UserContextProvider  from "./Context/UserContextProvider.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import CheckoutPage from "./components/Checkout/Checkout.jsx";
import ProfilePage from "./components/Profile/Profile.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/products/:title", element: <ProductListingPage /> },
      { path: "data/products/:productId", element: <ProductDescriptionPage /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Checkout", element: <CheckoutPage /> },
      { path: "/Profile", element: <ProfilePage /> }
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </UserContextProvider>
);
