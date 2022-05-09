import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

export default function ProductDetails() {
  let navigate = useNavigate();
  let params = useParams();
  let numbs = params.id-1;
  console.log(numbs)
  console.log("params is: ", params);
  // console.log(params.id);
  
  let [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [dataNumb, setDataNumb] = useState([]);

  const getProducts = async (params) => {
      
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
    // return numbs;
  };

  // useEffect(() => {
  //   let numb = data[params.id];
  //   getProducts(numb);
  // }, [numb]);

  //   return(
  //     <>
  //       <div className='col-md-6'>
  //         <img className="image-props"src={numb.image} alt= 'yeet'
  //         height="4" />
  //         <h1>{numb.title}</h1>
  //         <h1>{numb.description}</h1>
  //       </div>
  //     </>
  //   )
  // }


useEffect(() => {
  getProducts(data)
  console.log(data);
}, [data]);

    return(
      <>
      <div>
        <button onClick={() => navigate(`/all-products`)}>Go Back</button>
        <div className="product-container">  
          <div className="product-row">
            <div className="image-col">
              <img className="image-props" src={dataNumb.image} alt='product' />
            </div>
            <div key={dataNumb} className='card-col'>
              <div className="product-description">
                <h1 className="title">{dataNumb.title}</h1>
                <h1>{dataNumb.description}</h1>
                <h1>${dataNumb.price}</h1>
              </div>
            </div> 
          </div>
        </div>
      </div>
      </>
    )
  }