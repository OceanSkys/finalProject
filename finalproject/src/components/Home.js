import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function ProductsPicker() {
    let [products, setProducts] = useState('')
    let [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);

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
        {/* <SearchBar
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        >
          Search
        </SearchBar> */}
          <div className="product-section">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            {data.slice(0, 3).map((product) => (
              <div key={product.id} >
                {/* <div><img src={product.image} alt='product'/></div> */}
                <div>
                  {/* <h1>${product.price}</h1> */}
                </div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src={[0].image}alt="One"/>
                      </div>

                      <div className="item">
                        <img src={[1].image} alt="Two"/>
                      </div>

                      <div className="item">
                        <img src={[2].image} alt="Three"/>
                      </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
              </div>
            ))}                   
          </div>
    </div>
    );
  }