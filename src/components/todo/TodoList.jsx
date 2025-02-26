import styled from "styled-components";
import { useFilterParams } from "../../hooks/useFilterParams";
import { useTodoQuery } from "../../hooks/useTodoQuery";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const selectedFilter = useFilterParams();
  const { data: todos } = useTodoQuery(selectedFilter);

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>

      <TodoListContent>
        {todos?.map(({ id, text, completed }) => (
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
