import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleSubst = () => {
    setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    console.log("re-render");
  });

  const handleChange = useMemo(() => {
    for (let i = 0; i < 100000000000000; i++) {
      return count * 2;
    }
  }, [count]);

  const inputRef = useRef(null);
  console.log(inputRef);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <button onClick={handleSubst}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <p>{screenWidth}</p>
      <p>{handleChange}</p>
      <button onClick={handleClick}>Click me</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
