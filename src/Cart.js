import DisplayCart from './DisplayCart';
import { useState, useEffect } from 'react';

const Cart = ({cart, setCart, handleDelete}) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
    return (
       <div class = 'cart' style = {{backgroundColor: "beige"}}>
          {cart.length? (
            <DisplayCart cart = {cart} handleDelete = {handleDelete}/>
          ) : (
            <h1> You have nothing in your cart </h1>
          )}
      </div>
    )
  }
  
export default Cart