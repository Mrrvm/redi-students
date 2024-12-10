import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (product) => {
    setSelectedProducts([product, ...selectedProducts]);
  };

  return (
    <>
      {openCart && <Cart selectedProducts={selectedProducts} />}
      <Header setOpenCartFromHeader={() => setOpenCart(!openCart)} />
      <HeroSection />
      <ProductSection addProduct={addProduct} />
    </>
  );
}

export default App;
