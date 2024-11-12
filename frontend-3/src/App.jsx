import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import CartItem from "./components/shopingCart/CartItem"
import Admin from "./components/Admin/Admin";
import Login from "./Pages/User/Login";
import SignIn from "./Pages/User/SignIn";
import { Routes, Route } from "react-router-dom";

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
      </Routes>

      <Footer />
    </>
  )
}

export default App
