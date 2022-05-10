import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import {CartContext} from '../context/CartContext'
import {QuantityPicker} from 'react-qty-picker';


export default function ProductDetails() {

  let navigate = useNavigate();
  let params = useParams();
  let numbs = params.id-1;
  console.log(numbs)
  console.log("params is: ", params);
  
  // let [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [dataNumb, setDataNumb] = useState([]);
  const { cart, setCart } = useContext(CartContext);


    const getProducts = async (params) => {
      // const { cart, setCart } = useContext(CartContext);
      const url = `https://fakestoreapi.com/products/${params}`;
      const response = await fetch(url);
      const data = await response.json();
      const dataNumb = data[numbs]
      console.log(data);
      console.log(dataNumb)
  
      if (data) {
        setData(data);
      }
      if (dataNumb) {
        setDataNumb(dataNumb);
      }
  };

  const getPickerValue = (value) =>{
    dataNumb.quantity = value;
    
    console.log(dataNumb.quantity)
  };

useEffect(() => {
  getProducts(data)
  console.log(data);
}, [data]);

// const ShowProduct = () => {
  return (
    <>
    <div>
      <button className="go-back" onClick={() => navigate(`/all-products`)}>Go Back</button>
      <div className="product-container">  
        <div className="product-row">
          <div className="image-col">
            <img className="image-props2" src={dataNumb.image} alt='product' />
          </div>
          <div key={dataNumb} className='card-col'>
            <div className="product-description">
              <h1 className="title">{dataNumb.title}</h1>
              <h1>{dataNumb.description}</h1>
              <h1>${dataNumb.price}</h1>
              <div>
                <button className="mx-2" onClick={ () => setCart([...cart, dataNumb])}>Add to cart</button>
                <button className="mx-2" onClick={() => navigate(`/my-cart`)}>Go to Cart</button>
              </div>
              <QuantityPicker  min={1} max={10} value={0} onChange={getPickerValue} smooth/>
            </div>
          </div> 
        </div>
      </div>
    </div>
    </>
  );
};

