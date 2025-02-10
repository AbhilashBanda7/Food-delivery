import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./pages/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
function App() {
  const [showlogin,setshowlogin]=useState(false)

  return (
    <>
    {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
      <div className="App">
        <Navbar setshowlogin={setshowlogin}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/place" element={<PlaceOrder></PlaceOrder>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
