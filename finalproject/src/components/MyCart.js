import {useContext} from 'react';
import {CartContext} from '../context/CartContext'
import { useNavigate } from 'react-router-dom';
import { useState} from 'react'

const Cart = () => {
  const { cart } = useContext(CartContext);
  // const { cartItems, onAdd, onRemove } = props;
  const [cartItems, setCartItems] = useState([]);
  const [item, setItems] = useState([]);
  console.log(cart);
  let navigate = useNavigate();

  let subTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price*cart[i].quantity;
  }

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <button className="btn btn-primary col-md-2 fw-bold d-flex justify-content-center" onClick={() => navigate(`/all-products`)}>Back to Products</button>
      <div className='container total-item border border-dark'>
        <div className='row d-flex justify-content-center'>
          <h2 className='d-flex my-3 justify-content-center'>Items in cart : {cart.length}</h2>
            {cart.map(( item, index) => (
            <div key={index} className="cart-item-container">
              <div className='col-4 d-flex align-self-center'>
                <img src={item.image} className="image-props-cart"></img>    
              </div>
              <div className='d-flex align-items-center col-6'>
                <div>
                  <h3>{item.title}:</h3>
                </div>
                <div>
                  <div className='row d-flex align-items-center'>
                  <button onClick={() => onRemove(item)} className="removeadd col h-50">
                        -
                  </button>{' '}
                    <h4 className='d-flex justify-content-center col'>${item.price} @ {item.quantity}x = ${item.price *item.quantity}</h4>
                  <button onClick={() => onAdd(item)} className="removeadd col h-50">
                      +
                  </button>
                  </div>
                {/* <h2>{item.title}</h2> */}
                </div>
              </div>
            </div>
            ))}
            <div className='d-flex justify-content-center'>
              <h1>Total Amount: ${subTotal.toFixed(2)}</h1>
            </div>
            <div className='d-flex justify-content-center my-3'>
              <button className=" btn btn-primary col-md-2 fw-bold d-flex justify-content-center" onClick={() => navigate(`/checkout`)}>Go to Checkout</button>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Cart;