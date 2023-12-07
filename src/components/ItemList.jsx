import { Item } from "./Item";

import "./css/ItemList.css"

export const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

{
  /* <>{JSON.stringify(items)}</> */
}
