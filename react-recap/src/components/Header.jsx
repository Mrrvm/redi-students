const Header = ({ setOpenCartFromHeader }) => {
  return (
    <header className="site--bar">
      <nav className="navbar">
        <div className="navbar--logo">
          <a href="./index.html">R-Commerce</a>
        </div>
        <ul className="navbar--menu">
          <li className="navbar--search-cart">
            <input
              type="text"
              placeholder="Search..."
              className="navbar--search"
            />
          </li>
          <li onClick={setOpenCartFromHeader} id="cartLink">
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
