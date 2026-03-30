import products from "../data/products";
import Product from "../components/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";


function Home() {
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((item) => (
          <Product
            key={item.id}
            product={item}
            //Event handling Redux dispatch
            addToCart={() => dispatch(addToCart(item))}
          />
        ))
      )}
    </div>
  );
}

export default Home;









 <button onClick={() => console.log("Button clicked")}>
  Click Me
</button>