import React, { useReducer } from "react";
import styled from "styled-components";

const INFO_TYPES = {
  CHANGE: "CHANGE",
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET_ERROR: "SET_ERROR",
};

const initialState = {
  title: "",
  todos: [],
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case INFO_TYPES.CHANGE:
      return { ...state, title: action.payload };
    case INFO_TYPES.ADD:
      return {
        ...state,
        title: "",
        todos: [
          ...state.todos,
          { id: new Date().toISOString(), title: state.title },
        ],
      };
    case INFO_TYPES.DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case INFO_TYPES.UPDATE:
      const finded = state.todos.find((item) => item.id === action.payload);
      return {
        ...state,
        title: finded.title,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case INFO_TYPES.SET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export const TodoStyledReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, todos, errorMessage } = state;

  const handleChange = (event) => {
    dispatch({ type: INFO_TYPES.CHANGE, payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      return dispatch({
        type: INFO_TYPES.SET_ERROR,
        payload: "Заполните все поля!",
      });
    }
    dispatch({ type: INFO_TYPES.ADD });
    dispatch({ type: INFO_TYPES.SET_ERROR, payload: "" });
  };

  const handleDelete = (id) => {
    dispatch({ type: INFO_TYPES.DELETE, payload: id });
  };

  const handleUpdate = (id) => {
    dispatch({ type: INFO_TYPES.UPDATE, payload: id });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your todo..."
          value={title}
          onChange={handleChange}
        />
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
        <Button type="submit">Добавить</Button>
      </Form>
      <TodoList>
        {todos.map((item) => (
          <TodoItem key={item.id}>
            <p>{item.title}</p>
            <Button danger onClick={() => handleDelete(item.id)}>
              Удалить
            </Button>
            <Button onClick={() => handleUpdate(item.id)}>Редактировать</Button>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

// Styled-components
const Container = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: #f5f5f5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledError = styled.p`
  color: red;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background: ${(props) => (props.danger ? "#ff4d4d" : "#4caf50")};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const TodoList = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export default TodoStyledReducer;
