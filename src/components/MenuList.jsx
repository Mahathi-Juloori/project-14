import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchMenu } from '../store/menuSlice';
import { addToCart } from '../store/cartSlice';
import './MenuList.css';

const MenuList = () => {
  const dispatch=useDispatch();
  const {items,status,filter}=useSelector((state)=> state.menu);

  useEffect(()=>{
    dispatch(fetchMenu())
  },[dispatch])

  const filteredItems=filter === "All" ?items : items.filter((item)=> item.category === filter)

  if(status === "loading") return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading delicious items...</p>
    </div>
  )

  if(status === "failed") return (
    <div className="error-container">
      <p>Failed to load menu. Please try again.</p>
    </div>
  )

  if(filteredItems.length === 0) return (
    <div className="empty-menu">
      <span className="empty-icon">🍴</span>
      <p>No items found in this category</p>
    </div>
  )

  return (
    <div className='menu-grid'>
      {filteredItems.map((item)=> 
         <div className="menu-card" key={item.id}>
           <div className="card-image">
             <span className="category-badge">{item.category}</span>
           </div>
           <div className="card-content">
             <h5 className="item-name">{item.name}</h5>
             <p className="item-price">₹{item.price}</p>
             <button 
               className="add-btn" 
               onClick={()=> dispatch(addToCart(item))}
             >
               <span>➕</span> Add to Cart
             </button>
           </div>
         </div>
      )}
    </div>
  )
}

export default MenuList
