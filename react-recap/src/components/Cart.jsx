const Cart = ({ products }) => {
  return (
    <div>
      <span>&times;</span>
      <h1>Cart</h1>
      <p>...</p>
      {products.map((p) => {
        return <div>{p.title}</div>;
      })}
    </div>
  );
};

export default Cart;
