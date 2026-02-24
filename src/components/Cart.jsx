import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,clearCart } from '../store/cartSlice'
import './Cart.css';

const Cart = () => {
  const dispatch=useDispatch();
  const { cartItems}=useSelector(state=> state.cart)
  const total=cartItems.reduce((sum,item)=> sum+item.price*item.quantity,0)

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>🛒 Your Cart</h2>
        <div className="empty-cart">
          <span className="empty-icon">🛒</span>
          <p>Your cart is empty</p>
          <span className="empty-hint">Add some delicious items from the menu!</span>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item)=>
         <div className="cart-item" key={item.id}>
           <div className="cart-item-info">
             <p className="cart-item-name">{item.name}</p>
             <p className="cart-item-details">
               ₹{item.price} × {item.quantity}
             </p>
           </div>
           <div className="cart-item-right">
             <p className="cart-item-price">₹{item.price*item.quantity}</p>
             <button 
               className='remove-btn' 
               onClick={()=> dispatch(removeFromCart(item.id))}
               title="Remove item"
             >
               🗑️
             </button>
           </div>
         </div>
        )}
      </div>
     
      <div className="cart-total">
        <span>Total</span>
        <span className="total-amount">₹{total}</span>
      </div>
      
      <button 
        className='clear-cart-btn' 
        onClick={()=> dispatch(clearCart())}
      >
        🗑️ Clear Cart
      </button>
    </div>
  )
}

export default Cart
