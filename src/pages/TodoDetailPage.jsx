import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import styled from "styled-components";
import TodoItem, { ActionButton } from "../components/todo/TodoItem";
import { TodoContext } from "../context/TodoContext";

const TodoDetailPage = () => {
  const [targetTodoItem, setTargetTodoItem] = useState(null);
  const { getTodoItem } = useContext(TodoContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchTodoItem = async () => {
      const todoItem = await getTodoItem(id);

      setTargetTodoItem(todoItem);
    };

    fetchTodoItem();
  }, [getTodoItem, id]);

  return (
    <DetailPageWrapper>
      {targetTodoItem ? (
      <TodoItem
        id={targetTodoItem.id}
        text={targetTodoItem.text}
        completed={targetTodoItem.completed}
      />
      ) : (
        <p>해당하는 데이터를 찾을 수 없습니다.</p>
      )}

      <BackLink to="/">
        <ActionButton $bgColor="#242424">돌아가기</ActionButton>
      </BackLink>
    </DetailPageWrapper>
  );
};

const DetailPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BackLink = styled(Link)`
  flex: 1;

  button {
    width: 100%;
  }
`;

export default TodoDetailPage;
