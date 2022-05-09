import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import {useNavigate} from 'react-router-dom';

export default function AllProducts() {
    let [products, setProducts] = useState('')
    let [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    const getProducts = async (searchValue) => {
        
      const url = `https://fakestoreapi.com/products/${searchValue}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data) {
        setData(data);
      }
    };

  useEffect(() => {
    getProducts(searchValue);
  }, [searchValue]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
        <SearchBar
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        >
          Search
        </SearchBar>
        <br></br>
          <div className="product-section">
            {data.map((product) => (
                <div className="product-container">
                    <div className="product-row">
                        <div className="image-col">
                            <img className="image-props" src={product.image} alt='product' onClick={() => navigate(`/product-details/${product.id}`)}/>
                        </div>
                        <div key={product.id} className='card-col'>
                            <div className="product-description">
                                <h1 className="title">{product.title}</h1>
                                <h1>${product.price}</h1>
                            </div>
                        </div> 
                    </div>
                </div>
            ))}          
        </div>
    </div>
    );
  }