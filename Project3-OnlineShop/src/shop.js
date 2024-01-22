import React from "react";
import Item from "./item";

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image: "https://images.unsplash.com/photo-1585776461369-7727cfe97af0"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://images.unsplash.com/photo-1599412227383-b7d4751c8765"
    }
  ];
  return (
    <div className="shop">
      <Item item={items[0]} />
      <Item item={items[1]} />
    </div>
  );
};

export default Shop;
