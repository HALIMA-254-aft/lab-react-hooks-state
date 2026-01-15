import React, { useState } from 'react'
function Cart({ cart = [] }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <p key={index}>{item.name} is in your cart.</p>
          ))}

          <p>Total items: {cart.length}</p>
        </>
      )}
    </div>
  )
}

export default Cart

  

                
                
