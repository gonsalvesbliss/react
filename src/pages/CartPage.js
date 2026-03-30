/*import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";
//Conditional rendering
function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (  //message when the cart is empty

        <h3>Cart is empty</h3>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => dispatch(removeFromCart(item.id))}> 
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;*/



import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

// Conditional rendering
function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // total items count (for header)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h2>Your Cart ({totalItems})</h2>

      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px"
            }}
          >
            {/* ✅ Show quantity only */}
            <h4>
              {item.name} (Qty: {item.quantity})
            </h4>

            <p>Price: ₹{item.price}</p>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;


