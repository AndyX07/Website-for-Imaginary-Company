import DisplayCart from './DisplayCart';

const Cart = ({cart, setCart, handleDelete}) => {
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