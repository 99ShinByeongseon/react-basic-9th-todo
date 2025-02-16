import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDachboard";
import styled from "styled-components";

const TodoContainer = () => {
  return (
    <TodoContainerWrapper>
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </TodoContainerWrapper>
  );
};

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default TodoContainer;
