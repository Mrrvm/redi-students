import { useState } from "react";
import { useEffect } from "react";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products"); // Use the API URL here
      const data = await response.json();
      const slicedData = data.slice(0, 3);
      setProducts(slicedData);
    };

    fetchData();
  }, []);

  return (
    <section className="products">
      <h3 className="products--title" id="products"></h3>
      <div className="products--sorting">
        <label htmlFor="sort">Sort by price:</label>
        <select id="sort" className="sort--dropdown">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <ul className="products--list">
        {products.map((p) => (
          <li style={{ display: "flex", flexDirection: "column" }}>
            <img src={p.image} alt={p.name} className="product--image" />
            <div className="product--text">
              <h1 className="product--name">{p.title}</h1>
              <p className="product--description">{p.description}</p>
              <button onClick={() => {}} className="product--buy">Buy Now</button>
              <p className="product--price">{p.price} euros</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductSection;
