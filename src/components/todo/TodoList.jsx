import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../../api/todo-api"
import { useSearchParams } from "react-router";

const TodoList = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter");

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", selectedFilter],
    queryFn: () => getTodos(selectedFilter),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching todos - {error}</div>;
  }

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
