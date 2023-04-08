import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import About from './About';
import Cart from './Cart';
import Checkout from './Checkout';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([])

  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  useEffect(()=>{
    const fetchCart = async () => {
      const response = await axios.get('http://localhost:3500/cart');
      setCart(response.data);
    }
    fetchCart();
  }, []);

  const handleDelete = async(id) => {
    const tempCart = cart.filter(item => item.id!==id);
    await axios.delete(`http://localhost:3500/cart/${id}`)
    setCart(tempCart);
  }

  const handleSubmit  = async(e) => {
    e.preventDefault();
    const request = {
      "email": email,
      "feedback": feedback
    }
    const response = await axios.post('http://localhost:3500/feedback', request);
    console.log(response);
    setEmail('');
    setFeedback('');
  }

  const handleAdd = async(request) =>{
    const response = await axios.post('http://localhost:3500/cart', request);
    const tempCart = [...cart, response.data];
    setCart(tempCart);
  }
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path = "/" exact element = {<Home feedback = {feedback} setFeedback = {setFeedback} email = {email} setEmail = {setEmail} handleSubmit = {handleSubmit}/>}/>
        <Route path = "/services" element = {<Services handleAdd = {handleAdd}/>}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/cart" element = {<Cart cart = {cart} setCart = {setCart} handleDelete = {handleDelete}/>}/>
        <Route path = "/checkout" element = {<Checkout />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
