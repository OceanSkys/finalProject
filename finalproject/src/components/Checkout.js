import {useContext} from 'react';
import {CartContext} from '../context/CartContext'
import { NavLink } from "react-router-dom";
import { useState } from "react";
 
    const Checkout = () => {
    const { cart } = useContext(CartContext);
    
    let subTotal = 0;
    // used for loop to do calculations on the cart 
    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].price*cart[i].quantity;
    }
    // created function that clears the cart state
    const ClearCart = () => {
      const [cart, setCart] = useState([])
      setCart([])
    }

    return (
        <div>
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
            <NavLink to="/all-products" className="btn btn-primary col-md-2 fw-bold justify-content-end mt-3 mb-4" type="submit" onClick={ClearCart}>Checkout</NavLink>
        </div>
      );
    };

export default Checkout;