import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./css/NavBar.css";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acumulador, valorActual)=> acumulador + valorActual.quantity,0)

  return (
    <Link className="cartLik" to="/cart">
      <img src={cart} alt="changuito" width={25}></img>
      <span>{total}</span>
    </Link>
  );
};
