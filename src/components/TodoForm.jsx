import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const { addNewTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) throw new Error("Write bro!");
    const newTodo = {
      id: new Date().toISOString(),
      title: inputValue,
    };
    setInputValue("");
    addNewTodo(newTodo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your todo..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">add-todo</button>
      </form>
    </div>
  );
};
