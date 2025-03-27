import { Test1 } from "./components/useReducer/Test1";
import { Todo } from "./components/useReducer/Todo";
import TodoPureReducer from "./components/useReducer/TodoPureReducer";

const App = () => {
  return (
    <div>
      App
      <TodoPureReducer />
    </div>
  );
};

export default App;
