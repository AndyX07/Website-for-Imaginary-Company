const DisplayCart = ({cart, handleDelete}) => {
  let total = 0;
  cart.map(item => total+=item.price);
  return (
    <div>
        {cart.map(item => (
            <div class = "displaycart">
                <h1>{item.item}</h1>
                <h2>Price: {item.price}</h2>
                <button onClick = {()=>handleDelete(item.id)}> Remove </button>
            </div>
        ))}
        <h2>Total Price: {total}</h2>
    </div>
  )
}

export default DisplayCart