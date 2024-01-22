import { useState } from "react";
import Shop from "./Shop";
import "./styles.css";

export default function App() {
  const [buttonStatus, setButtonStatus] = useState(true);

  function handleStatusChange() {
    setButtonStatus((prev) => !prev);
  }

  return (
    <div className="ui-container">
      {buttonStatus ? (
        <>
          <h2 className="ui-title">You have to log in first!</h2>
          <button onClick={handleStatusChange} className="ui-button">
            Log in
          </button>
        </>
      ) : (
        <>
          <button onClick={handleStatusChange} className="ui-button logout">
            Log out
          </button>
          <Shop />
        </>
      )}
    </div>
  );
}
