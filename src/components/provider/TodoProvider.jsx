import { useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { todoClient } from "../../lib/todoClient";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const { data } = await todoClient.get("/");
    
    setTodos(data);
  }

  const addTodos = async (text) => {
    const { data } = await todoClient.post("/", {
      text,
      completed: false,
    });

    await getTodos();

    return data;
  };

  const toggleTodoCompleted = async(id, currentCompleted) => {
    const { data } = await todoClient.patch(`/${id}`, {
      completed: !currentCompleted,
    });

    await getTodos();

    return data;
  };
  // 삼항 연산자
  // 조건 ? 참일 때 : 거짓일 때

  const deleteTodo = async(id) => {
    // todo.id가 내가 찾는 id와 같지 않을 때 true를 반환하여 그대로 남겨둠
    const { data } = await todoClient.delete(`/${id}`);

    await getTodos();

    return data;
  };

  const getfilteredTodos = (selectedFilter) => {
    if (selectedFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (selectedFilter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
  <TodoContext.Provider
    value={{
      todos,
      addTodos,
      toggleTodoCompleted,
      deleteTodo,
      getfilteredTodos,
    }}
  >
    {children}
  </TodoContext.Provider>
  ); 
};

export default TodoProvider;
