import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(cart);
  let navigate = useNavigate();

  let subTotal = 0;
  // used for loop to do calculations on the cart 
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price*cart[i].quantity;
  }

  return (
    <div>
      <span>items in cart : {cart.length}</span>
      {cart.map(( item, index) => (
      <div key={index} className="cart-item-container">
        <div className='col-4 d-flex align-self-center'>
          <img src={item.image} className="image-props"                   
            height="100px"
            width="100px">
          </img>    
        </div>
        <div className='d-flex align-items-center col-6'>
          <div>
            <h3>{item.title}:</h3>
          </div>
          <div>
            <h4 className='d-flex justify-content-center '>${item.price} @ {item.quantity}x = ${item.price *item.quantity}</h4>
          {/* <h2>{item.title}</h2> */}
          </div>
        </div>
      </div>
      ))}
      <div>
        <h1>Total Amount: ${subTotal}</h1>
      </div>
      <button onClick={() => navigate(`/checkout`)}>Go to Checkout</button>
    </div>
  )
}

export default Cart;