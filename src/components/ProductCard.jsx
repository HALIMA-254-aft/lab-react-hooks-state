import React from 'react'
import styles from '../styles/ProductCard.module.css'

function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>{product.name}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard



   

