import { useState } from "react";

const Counter = () => {
  const [myCounter, setCounter] = useState(0);
  return (
    <>
      <div className="flex gap-2 justify-evenly items-center mb-3">
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

        <h2 className="text-3xl">Counter: {myCounter}</h2>
        <button
          onClick={() => {
            setCounter(myCounter => myCounter + 1);
            setCounter(myCounter => myCounter + 1);
            setCounter(myCounter => myCounter + 1);
            setCounter(myCounter => myCounter + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
