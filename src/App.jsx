import { useState } from "react";
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          if (Counter > 0) {
            setCounter(Counter - 1);
          } else {
            alert("Counter cannot be less than 0");
          }
        }}
      >
        -
      </button>

      <h1>Counter: {Counter}</h1>
      <button
        onClick={() => {
          setCounter(Counter + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
