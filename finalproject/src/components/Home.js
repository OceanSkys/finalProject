import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Carousel } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

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
    <div className="row carousel-container d-flex align-content-center justify-content-center w-100">
      <div className="col-6">
          <Carousel className="w-100 h-100 d-flex justify-content-center align-self-center" fade={true} pause={false}>
          <Carousel.Item interval={6000} className="d-flex justify-content-center">
            <img
              className="d-block w-50"
              src={data["0"]?.image}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000} className="d-flex justify-content-center">
            <img
              className="d-block w-50"
              src={data["1"]?.image}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000} className="d-flex justify-content-center">
            <img
              className="d-block w-50"
              src={data["2"]?.image}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-6">
          <Carousel className="w-100 h-100 d-flex justify-content-center align-items-center" fade={true} pause={false}>
          <Carousel.Item interval={6000} className="d-flex justify-content-center align-items-center">
            <img
              className="d-block w-50"
              src={data["3"]?.image}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000} className="d-flex justify-content-center align-content-center">
            <img
              className="d-block w-50"
              src={data["4"]?.image}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={6000} className="d-flex justify-content-center align-content-center">
            <img
              className=" d-flex w-50 img"
              src={data["5"]?.image}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <NavLink to="/all-products" className="btn btn-primary col-md-2 fw-bold justify-content-end mt-3 mb-4" type="submit">Let's Shop!</NavLink>
    </div>
    );
  }