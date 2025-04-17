import {useState} from "react";

const Counter = () => {
  const [myCounter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          if (myCounter > 0) {
            setCounter(myCounter - 1);
          } else {
            alert("Counter cannot be less than 0");
          }
        }}
      >
        -
      </button>

      <h1>Counter: {myCounter}</h1>
      <button
        onClick={() => {
          setCounter(myCounter + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
