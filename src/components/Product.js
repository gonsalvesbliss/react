function Product({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
                  
      <button onClick={addToCart}> 
        Add to Cart 
      </button>   
    </div>
  );
}
//Component reusability
export default Product;