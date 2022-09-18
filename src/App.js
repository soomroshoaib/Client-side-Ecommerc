import Navbar from "./components/header/Navbar"
import New from './components/header/new-Navbaar/newNav.mjs'
import Meincomp from "./components/Home/Meincomp.mjs";
import Fotter from './components/fotter/fotter'
import './App.css';

function App() {
  return (
    <div>
     <Navbar />
     <New />
     <Meincomp />
     <Fotter />
    </div>
  );
}

export default App;



