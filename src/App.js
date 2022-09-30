import Navbar from "./components/header/Navbar"
import New from './components/header/new-Navbaar/newNav.mjs'
import Meincomp from "./components/Home/Meincomp.mjs";
import Fotter from './components/fotter/fotter'
import './App.css';
import Login from './components/Signup_Login/Login';
import SignUp from './components/Signup_Login/SignUp';
import Cart from './components/carts/Cart'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <Navbar />
     <New />
     <Routes>
      <Route path="/" element={<Meincomp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/getproductsone/:id" element={<Cart />} />
     </Routes>
     
     <Fotter />
    </div>
  );
}

export default App;



