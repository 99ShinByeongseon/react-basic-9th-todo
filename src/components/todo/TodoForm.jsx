import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAddTodoMutation } from "../../hooks/useTodoQuery";
import { ActionButton } from "./TodoItem";

const TodoForm = () => {
  const { mutate: addTodoMutate } = useAddTodoMutation();

  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodoMutate(todoText);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <TodoFormWrapper onSubmit={handleSubmit}>
      <TodoFormInput
        type="text"
        value={todoText}
        onChange={handleChangeTodoText}
        placeholder="할 일을 입력하세요"
        ref={inputRef}
      />
      <SubmitButton type="submit" $bgColor="#852be6">
        제출하기
      </SubmitButton>
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TodoFormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  flex: 8;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #582be6;
    outline: none;
  }
`;

const SubmitButton = styled(ActionButton)`
  flex: 1;
  text-align: center;
`;

export default TodoForm;
