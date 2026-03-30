import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() { //Redux (useSelector)
  const cart = useSelector((state) => state.cart);

  return (
    <div style={{ background: "green", color: "white", padding: "10px" }}>
      <h2>My Shop</h2>

      <Link to="/" style={{ marginRight: "10px", color: "white" }}>
        Home
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart ({cart.length})
      </Link>
    </div>
  );
}

export default Header;