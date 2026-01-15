import React, { useState } from 'react'



const ProductList = ({ addToCart }) => {
  const [clickedProduct, setClickedProduct] = useState(null)

  const products = [
  { id: 1, name: 'Fresh Apples', price: '$3.99', category: 'Fruits', inStock: true },
  { id: 2, name: 'Organic Blueberries', price: '$5.99', category: 'Fruits', inStock: true },
  { id: 3, name: 'Ripe Mangoes', price: '$4.99', category: 'Fruits', inStock: false },
  { id: 4, name: 'Carrots Bundle', price: '$2.49', category: 'Vegetables', inStock: true },
  { id: 5, name: 'Fresh Broccoli', price: '$3.49', category: 'Vegetables', inStock: true },
  { id: 6, name: 'Cherry Tomatoes', price: '$4.99', category: 'Vegetables', inStock: true },

  // === New Dairy Products ===
  { id: 7, name: 'Whole Milk', price: '$2.99', category: 'Dairy', inStock: true },
  { id: 8, name: 'Cheddar Cheese', price: '$4.49', category: 'Dairy', inStock: true },
  { id: 9, name: 'Yogurt', price: '$1.99', category: 'Dairy', inStock: false },
]


  const handleAddToCart = (product) => {
    setClickedProduct(product.id)
    setTimeout(() => setClickedProduct(null), 600)
    addToCart(product)
    console.log(`✓ ${product.name} added to cart!`)
  }

  return (
    <div className="products-section">
      <h2>Available Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${clickedProduct === product.id ? 'clicked' : ''}`}
          >
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="price">{product.price}</p>
            
            <span className={`status ${product.inStock ? 'inStock' : 'outOfStock'}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </span>

            <button
              onClick={() => handleAddToCart(product)}
              disabled={!product.inStock}
              className={`add-to-cart-btn ${!product.inStock ? 'btn-disabled' : ''} ${clickedProduct === product.id ? 'pulse' : ''}`}
              aria-label={`Add ${product.name} to cart`}
            >
              {product.inStock ? '🛒 Add to Cart' : 'Unavailable'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
