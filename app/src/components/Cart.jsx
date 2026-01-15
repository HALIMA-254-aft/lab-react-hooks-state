import React, { useState } from 'react'

const Cart = ({ cart, removeFromCart }) => {
  const [removedIndex, setRemovedIndex] = useState(null)
  const [checkoutClicked, setCheckoutClicked] = useState(false)

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0)

  const handleRemoveItem = (index) => {
    // Visual feedback
    setRemovedIndex(index)
    setTimeout(() => {
      removeFromCart(index)
      setRemovedIndex(null)
    }, 300)
  }

  const handleCheckout = () => {
    if (cart.length === 0) return
    
    // Visual feedback
    setCheckoutClicked(true)
    setTimeout(() => setCheckoutClicked(false), 600)
    
    // Log checkout action
    console.log('Proceeding to checkout with items:', cart)
    console.log('Total: $' + total.toFixed(2))
    
    // Could implement actual checkout logic here
    alert(`Checkout: ${cart.length} item(s) - Total: $${total.toFixed(2)}`)
  }

  const handleCartItemHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.backgroundColor = 'var(--surface-alt)'
      e.currentTarget.style.transform = 'translateX(4px)'
    } else {
      e.currentTarget.style.backgroundColor = 'var(--background)'
      e.currentTarget.style.transform = 'translateX(0)'
    }
  }

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart ({cart.length})</h2>
      
      {cart.length === 0 ? (
        <p className="empty-cart">
          🛍️ Your cart is empty<br />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Start shopping to add items
          </span>
        </p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li 
                key={index} 
                className={`cart-item ${removedIndex === index ? 'removing' : ''}`}
                onMouseEnter={(e) => handleCartItemHover(e, true)}
                onMouseLeave={(e) => handleCartItemHover(e, false)}
              >
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => handleRemoveItem(index)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ✕ Remove
                </button>
              </li>
            ))}
          </ul>
          
          <div className="cart-total">
            <strong>Total: {total.toFixed(2) === '0.00' ? '$0.00' : '$' + total.toFixed(2)}</strong>
          </div>
          
          <button 
            className={`checkout-btn ${checkoutClicked ? 'pulse' : ''}`}
            onClick={handleCheckout}
            aria-label="Proceed to checkout"
          >
            ✓ Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
