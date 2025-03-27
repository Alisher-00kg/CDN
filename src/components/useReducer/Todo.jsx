import React, { useReducer, useRef } from "react";
import styled from "styled-components";

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      const newTodo = {
        id: new Date().toISOString(),
        title: action.payload,
      };
      return { todos: [...state.todos, newTodo] };
    default:
      return state;
  }
};

const initialState = {
  todos: [],
};

export const Todo = () => {
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    dispatch({ type: "addTodo", payload: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Enter your todo ..." ref={inputRef} />
        <Button type="submit">Add</Button>
      </Form>
      <List>
        {state.todos.map((item) => (
          <ListItem key={item.id}>{item.title}</ListItem>
        ))}
      </List>
    </Container>
  );
};
const Container = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`;

const ListItem = styled.li`
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
`;
