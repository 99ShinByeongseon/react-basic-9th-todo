import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useSearchParams } from "react-router";

const TodoList = () => {
  const { getfilteredTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();

  const selectedFilter = searchParams.get("filter");

  const filteredTodos = getfilteredTodos(selectedFilter);

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>

      <TodoListContent>
        {filteredTodos.map(({ id, text, completed }) => (
          <TodoItem key={id} completed={completed} text={text} id={id} />
        ))}
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;
