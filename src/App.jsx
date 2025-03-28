import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { InputDate } from "./components/UI/InputDate";

const App = () => {
  return (
    <div>
      App
      <TodoForm />
      <TodoList />
      <InputDate />
    </div>
  );
};

export default App;
