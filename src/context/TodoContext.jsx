import { createContext, useState } from "react";

export const TodoContext = createContext({});

export const ToodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <TodoContext.Provider value={{ addNewTodo, todos }}>
      {children}
    </TodoContext.Provider>
  );
};
