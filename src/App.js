import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes} from "react-router";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart}/>
        <Route exact path="/checkout" Component={Checkout}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/contact" Component={Contact}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
