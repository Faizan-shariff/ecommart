import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes} from "react-router";
import Products from "./component/Products";
import { renderMatches } from "react-router-dom";
import Product from "./component/Product";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart}/>

      </Routes>
    </>
  );
}

export default App;
