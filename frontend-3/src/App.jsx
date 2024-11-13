import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import CartItem from "./components/shopingCart/CartItem"
import Admin from "./components/Admin/Admin";
import Login from "./Pages/User/Login";
import SignIn from "./Pages/User/SignIn";
import UserProfile from "./components/userProfile/UserProfile";
import EditProfile from "./components/userProfile/EditProfile";
import ViewOrders from "./components/userProfile/ViewOrder";
import Checkout from "./components/CheckoutProduct/Checkout";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <>
      <NavBar />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/be_seller" element={<Admin />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/viewOrders" element={<ViewOrders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
