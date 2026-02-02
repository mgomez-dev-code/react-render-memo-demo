import Item from "./Item";
import { memo } from "react";

interface ItemListProps {
  onItemClick: (name: string) => void;
}

const ItemList = memo(function ItemList({ onItemClick }: ItemListProps) {
  const items = ["Apple", "Banana", "Orange", "Mango"];

  console.log("ItemList rendered");

  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item} name={item} onClick={onItemClick} />
      ))}
    </ul>
  );
});

export default ItemList;
