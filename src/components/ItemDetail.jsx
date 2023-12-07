import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";

import { CartContext } from "../contexts/CartContext";

import "./css/ItemListCont.css";

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);
  const add = (quantity) => {
    onAdd(item, quantity);
  };

  return (
    <div className="card-det-cont">
      <div className="imgBox">
      <img src={item.pictureUrl} />
      </div>
      

      <div className="card-det">
     <span>{item.title}</span>
    
      <h2>Stock: {item.stock}</h2>
      <ItemCounter onAdd={add} stock={item.stock} initial={1} />
      </div>
     
    </div>
  );
};
