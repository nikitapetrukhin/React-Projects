import { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          onClick={handleRemoveClick}
          disabled={total <= 1}
        >
          -
        </button>
        <h3 className="item-total">{total}</h3>
        <button className="item-button" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
