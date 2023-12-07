import { useState } from "react";

import "./css/ItemListCont.css"

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleIncreaseCount = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };
  const handleDecreaseCount = () => {
    if (count > 1) setCount((prev) => prev -  1);
  };

  const handleAdd = ()=>{
    onAdd(count)
    setCount(initial)
  }
  return (
    <>
      <div className="item-counter">
        <div className="btn-counter" style={{ fontSize: 32 }} onClick={handleDecreaseCount}>-</div>
        <mark className="mark">{count}</mark>
         
        <div className="btn-counter" style={{ fontSize: 32 }} onClick={handleIncreaseCount}>
          +
        </div>
      </div>
      <br></br>
      <button className="btn-enviar"onClick={handleAdd}>Agregar al carrito</button>
    </>
  );
};
