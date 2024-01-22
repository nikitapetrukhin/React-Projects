import Item from "./Item";
import { useEffect, useState } from "react";

const Shop = () => {
  //Перепишем захардкоженные позиции с помощью стейта:
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [src, setSrc] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  // Чтобы блокировать релоад страницы, как и при работе с формами в ванилла-JS, используется
  // метод event.preventDefault() по событию submit.
  function handleFormSubmit(e) {
    e.preventDefault();

    //Запрет на добавление товара, если заполнены не все поля
    if (name.trim() !== "" || desc.trim() !== "" || src.trim() !== "") {
      setItems([...items, { id: crypto.randomUUID(), name, desc, src }]);
      setName("");
      setDesc("");
      setSrc("");
    } else {
      alert("Please fill in all the gaps!");
    }
  }

  function handleItemDelete(key) {
    const newItems = items.filter((item) => key !== item.id);
    setItems(newItems);
  }

  return (
    <div className="ui-container">
      {items.length === 0 ? (
        <p style={{ color: "red" }}>Add first item!</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <Item info={item} />
            <button onClick={() => handleItemDelete(item.id)}>Delete</button>
          </div>
        ))
      )}
      <form className="ui-container" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="ui-textfield"
        />

        <label htmlFor="desc">Description: </label>
        <input
          type="text"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="ui-textfield"
        />

        <label htmlFor="src">Picture: </label>
        <input
          type="url"
          id="src"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
          className="ui-textfield"
          placeholder="link: https://..."
        />

        <input type="submit" value="Add" className="ui-button-add" />
      </form>
    </div>
  );
};

export default Shop;
