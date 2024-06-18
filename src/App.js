import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import Cart from './Components/Cart/Cart';
import EmptyCart from './Components/EmptyCart/EmptyCart';
import NothingCart from './Components/NothingCart/NothingCart';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import AboutUs from './Components/AboutUs/AboutUs';
import Account from './Components/Account/Account';
import Appliances from './Components/Appliances/Appliances';
import BuyNow from './Components/BuyNow/BuyNow';
import Electronics from './Components/Electronics/Electronics';
import Furniture from './Components/Furniture/Furniture';
import Kitchen from './Components/Kitchen/Kitchen';
import Mobiles from './Components/Mobiles/Mobiles';
import Offers from './Components/Offers/Offers';
import Privacy from './Components/Privcey/Privacy';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import NotFound from './Components/NotFound/NotFound';
import Layout from './Components/Layout';
import ProductReviews from './Components/ProductReviews/ProductReviews';
import ProductDetails from './Components/ProductDetails/ProdductDetails';
import MainElectronics from './Components/MainElectronics/MainElectronics';
import MainOffer from './Components/MainOffer/MainOffer';
import SignUp from './Components/SingUp/SignUp';
import Login from './Components/Login/Login';
import AuthContextProvider from './Contexts/AuthContext';
import CartContextProvider from './Contexts/CartContext';
import ForgetPasswordTwo from './Components/ForgetPasswordTwo/ForgetPasswordTwo';
import ForgetPasswordTree from './Components/ForgetPasswordThree/ForgetPasswordThree';
import CartThree from './Components/CartThree/CartThree';
import HomeDashboard from './Dashboard/HomeDashboard/HomeDashboard';
import CounterInDashboard from './Dashboard/ComponantDashboard/CounterInDashboard';
import UserDashboard from './Dashboard/UserDashboard/UserDashboard';
import AddUserDashboard from './Dashboard/UserDashboard/AddUserDashboard';
import Orders from './Components/Orders/Orders';

export default function App() {

  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "signup", element: <SignUp /> },
        { path: "login", element: <Login /> },
        { path: "privacy", element: <Privacy /> },
        { path: "home", element: <HomePage /> },
        { path: "cart", element: <Cart /> },
        { path: "cartthree", element: <CartThree /> },
        { path: "EmptyCart", element: <EmptyCart /> },
        { path: "ForgetPassword", element: <ForgetPassword /> },
        { path: "ForgetPasswordTwo", element: <ForgetPasswordTwo /> },
        { path: "forgetPasswordTree", element: <ForgetPasswordTree /> },
        { path: "NothingCart", element: <NothingCart /> },
        { path: "productDetails", element: <ProductDetails /> },
        { path: "aboutUs", element: <AboutUs /> },
        { path: "account", element: <Account /> },
        { path: "appliances", element: <Appliances /> },
        { path: "buyNow", element: <BuyNow /> },
        { path: "Electronics", element: <Electronics /> },
        { path: "furniture", element: <Furniture /> },
        { path: "kitchen", element: <Kitchen /> },
        { path: "mobiles", element: <Mobiles /> },
        { path: "offers", element: <Offers /> },
        { path: "TermsAndConditions", element: <TermsAndConditions /> },
        { path: "productReviews", element: <ProductReviews /> },
        { path: "mainElectronics", element: <MainElectronics /> },
        { path: "mainOffer", element: <MainOffer /> },
        { path: "orders", element: <Orders /> },

        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/dashboard",
      element: <HomeDashboard />,
      children: [
        {
          path: "/dashboard",
          element: <CounterInDashboard />,
        },
        {
          path: "userdashboard",
          element: <UserDashboard />,
        },
        {
          path: "adduserdashboard",
          element: <AddUserDashboard/>,
        },
      ],
    },
  ]);
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
            <RouterProvider router={routers}></RouterProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  )
}
