import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import { NavLink } from "react-router-dom";
import  Confetti  from 'react-confetti';
 
    const Checkout = () => {
    let navigate = useNavigate();
    const { cart } = useContext(CartContext);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [show, setShow] = useState(false);
    const confettiRef = useRef(null);
  
    useEffect(() => {
      setHeight(confettiRef.current.clientHeight);
      setWidth(confettiRef.current.clientWidth);
    }, [])
  
    const HandleShow = () => {
        setTimeout(() => {    
            setShow(true); 
        }, 0);
        setTimeout(() => {    
            setShow(false); 
        }, 6000);
};

    let subTotal = 0;
    // used for loop to do calculations on the cart 
    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].price*cart[i].quantity;
    }
    // created function that clears the cart state
    const ClearCart = () => {
      const [cart, setCart] = useState([])
      setCart([])
    };


    return (
        <div className="confetti-wrap" ref={confettiRef}>
        <Confetti
          recycle={show}
          numberOfPieces={2000}
          width={width}
          height={height}
        />
        {/* <button className="btnn btn btn-primary fw-bold marg d-flex justify-content-center" onClick={() => handleShow(true)}>Checkout</button> */}
            <div className='container checkout-props d-flex justify-content-center align-content-center border border-dark'>
                <div className='row d-flex justify-content-center align-content-center'>
                    <div className="col-5 my-1">
                        <h2 className='text-center'>All Items:</h2>
                        {cart.map(( item, index) => (
                        <div key={index} className="cart-item-container d-flex justify-content-center align-content-center">
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
                            {/* <h1>Total Amount: ${subTotal}</h1> */}
                    </div>
                    <div className='col-5 d-flex align-content-center justify-content-center my-5' >
                        <div className="container sign-out-form d-flex align-content-center justify-content-center">
                            <form className='total-item d-flex align-content-center justify-content-center'>
                                <div className="row total-item d-flex align-content-center justify-content-center">
                                <div className="col-5 total-item">
                                    <h3>Billing Address</h3>
                                    <label for="fname"><i className="fa fa-user"></i> Full Name</label><br/>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" /><br/>
                                    <label for="email"><i className="fa fa-envelope"></i> Email</label><br/>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" /><br/>
                                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label><br/>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" /><br/>
                                    <label for="city"><i className="fa fa-institution"></i> City</label><br/>
                                    <input type="text" id="city" name="city" placeholder="New York" /><br/>

                                    <div className="row">
                                    <div className="col-50">
                                        <label for="state">State</label><br/>
                                        <input type="text" id="state" name="state" placeholder="NY" /><br/>
                                    </div>
                                    <div className="col-50">
                                        <label for="zip">Zip</label><br/>
                                        <input type="text" id="zip" name="zip" placeholder="10001" /><br/>
                                        <h1 className='mt-3'>Total:</h1>
                                        <h1 className="floating2">${subTotal.toFixed(2)}</h1>
                                    </div>
                                    </div>
                                </div>

                                <div className= "col-5">
                                    <h3>Payment: Checkout</h3>
                                    {/* <label for="fname">Accepted Cards</label><br/>
                                    <div className="icon-container">
                                    <i className="fa fa-cc-visa"></i>
                                    <i className="fa fa-cc-amex"></i>
                                    <i className="fa fa-cc-mastercard"></i>
                                    <i className="fa fa-cc-discover" ></i>
                                    </div> */}
                                    <label for="cname">Name on Card</label><br/>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe"/><br/>
                                    <label for="ccnum">Credit card number</label><br/>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" /><br/>
                                    <label for="expmonth">Exp Month</label><br/>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September" /><br/>

                                    <div className="row">
                                    <div className="col-50">
                                        <label for="expyear">Exp Year</label><br/>
                                        <input type="text" id="expyear" name="expyear" placeholder="2018" /><br/>
                                    </div>
                                    <div className="col-50">
                                        <label for="cvv">CVV</label><br/>
                                        <input type="text" id="cvv" name="cvv" placeholder="352" /><br/>
                                        {/* <button className="btnn btn btn-primary fw-bold marg d-flex justify-content-center" type="button" onClick={{HandleShow, ClearCart}}>Checkout</button> */}
                                        <NavLink to="/all-products" className="btn btn-primary fw-bold marg d-flex justify-content-center" type="submit" onClick={{HandleShow, ClearCart}}>Checkout</NavLink>
                                    </div>
                                    </div>
                                    </ div>
                                </div>
                                
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      );
    };

export default Checkout;