import { useState } from "react";
import "../css/counter.css";
export function CountApp() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="count__header"> Current Count is:</h1>
      <div className="count__curent">
        <h2 className="count__subheader">{count}</h2>
      </div>
      <section className="count__btns">
        <button className="count__btn add" onClick={handleIncrement}>
          +
        </button>
        <button className="count__btn subtract" onClick={handleDecrement}>
          -
        </button>
        <button className="count__btn reset" onClick={handleReset}>
          Reset
        </button>
      </section>
    </div>
  );
}
