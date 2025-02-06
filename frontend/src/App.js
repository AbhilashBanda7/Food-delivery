import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/place' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
  );
}

export default App;
