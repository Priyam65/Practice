import { useReducer } from "react";

const UseReducerHook = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(countReducer, 0);
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
      <span>{state}</span>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
    </div>
  );
};

export default UseReducerHook;
