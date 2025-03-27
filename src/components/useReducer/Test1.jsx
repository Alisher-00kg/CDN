import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "chika":
      return { ...state, message: "Salam" };
    case "reset":
      return initialState;
    default:
      return state;
  }

  //   if (action.type === "plus") {
  //     return { count: state.count + 1 };
  //   } else if (action.type === "minus") {
  //     return { count: state.count - 1 };
  //   }
};
const initialState = {
  count: 0,
  message: "",
};
export const Test1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const handleIncrement = () => {
  //     dispatch({ type: "plus" });
  //   };
  //   const handleDecrement = () => {
  //     dispatch({ type: "minus" });
  //   };
  return (
    <div>
      Test1
      <p>{state.count}</p>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={state.count === 0}
      >
        increment
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "chika" })}>show message</button>
    </div>
  );
};
