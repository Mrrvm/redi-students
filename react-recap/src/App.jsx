import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <>
      <Header setOpenCartFromHeader={() => setOpenCart(!openCart)} />
      <HeroSection />
      <ProductSection />
      {openCart && <Cart selectedProducts={selectedProducts} />}
    </>
  );
}

export default App;
