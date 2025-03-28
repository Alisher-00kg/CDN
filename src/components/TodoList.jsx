import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const res = useContext(TodoContext);
  console.log(res);

  return (
    <div>
      {todos.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};
