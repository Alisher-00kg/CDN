import { useRef, useState } from "react";
import styled from "styled-components";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: new Date().toISOString(), text: inputRef.current.value },
    ]);

    inputRef.current.value = "";
  };

  return (
    <TodoContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="Enter your todo ..." ref={inputRef} />
        <StyledButton>add-todo</StyledButton>
      </StyledForm>
      <TodoList>
        {todos.map((item) => (
          <TodoItem key={item.id}>{item.text}</TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  gap: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const StyledButton = styled.button`
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`;

const TodoItem = styled.li`
  background: white;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

