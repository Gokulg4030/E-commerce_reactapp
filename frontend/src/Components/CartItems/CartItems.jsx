import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'


function CartItems() {
    const {all_products,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      {/* <div className="classitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div> */}
      <hr />
      {all_products && Array.isArray(all_products) && all_products.map((e) => {
        if(cartItems[e.id]>0)
        {
        return ( 
        <div>
        <div className='cartitems-format'>
           <img src={e.image} alt="" className='carticon-product-icon' />
           <p>{e.name}</p>
           <p>${e.new_price}</p>
           <button className='cartitems-quantity'>{cartItems[e.id]}</button>
           <p>{e.new_price*cartItems[e.id]}</p>
           <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
        
    </div>
      )}
           return null;
      })}
     
    </div>
  )
}

export default CartItems