import React, { useState } from "react";

export default function Item({ item }) {
  const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount((prev) => prev + 1);
  }

  function handleMinusClick() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="item">
      <img src={item.image} alt="img" />
      <div className="item-info">
        <h2>{item.name}</h2>
        <p>{item.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          onClick={handleMinusClick}
          disabled={count <= 0 ? true : false}
        >
          -
        </button>
        <h3 className="item-total">{count}</h3>
        <button className="item-button" onClick={handlePlusClick}>
          +
        </button>
      </div>
    </div>
  );
}
