import { useState } from "react";
import Shop from "./shop";

export default function App() {
  const [state, setState] = useState(true);

  function handleChangeClick() {
    setState(!state);
  }

  return state ? (
    <>
      <h2 className="ui-title">Нужно залогиниться!</h2>
      <button className="ui-button" onClick={handleChangeClick}>
        Войти
      </button>
    </>
  ) : (
    <>
      <Shop />
      <button className="ui-button" onClick={handleChangeClick}>
        Выйти
      </button>
    </>
  );
}
