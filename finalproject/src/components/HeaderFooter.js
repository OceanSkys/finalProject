  import { NavLink } from "react-router-dom";
  import {useNavigate} from 'react-router-dom';
  import { useContext } from "react";
  import { CartContext } from "../context/CartContext";

  export default function HeaderFooter(props) {
    // const { cart, toggleCart } = useContext(CartContext);
    let navigate = useNavigate();
    return (
      <div>
        <div className="HeaderFooterColorBar" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: "white",
          }}
        >
          <div className="Logo" onClick={() => navigate(`/`)}>Jeremy's Products</div>
          <div className="Navs">
            <NavLink to="/" className="Link">
              Home
            </NavLink>
            <NavLink to="all-products" className="Link">
              All Products
            </NavLink>
            <NavLink to="my-cart" className="Link">
              My cart
            </NavLink>
          </div>
        </div>
          <div style={{ padding: 40 }}>
          {/* <button onClick={() => toggleCart()}>Toggle Cart</button>
        <div>Current Cart: {cart}</div> */}
          {props.children}
          </div>
        <div className="Copyright">&copy; 2022 Jeremy Thornton</div>
      </div>
    );
  }
  