const Cart = ({ selectedProducts }) => {
  return (
    <div style={{ color: "black" }}>
      <span>&times;</span>
      <h1>Cart</h1>
      <p>...</p>
      {selectedProducts.map((p) => {
        return <div>{p.title}</div>;
      })}
    </div>
  );
};

export default Cart;
