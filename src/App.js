import "./App.css";
import CartContextProvider from "./Context/CartContext";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <CartContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
