import { useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { SAMPLE_TODOS } from "../../constants/sample-todos";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (text) => {
    setTodos([{ id: crypto.randomUUID(), text, completed: false }, ...todos]);
  };

  const toggleTodoCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  // 삼항 연산자
  // 조건 ? 참일 때 : 거짓일 때

  const deleteTodo = (id) => {
    // todo.id가 내가 찾는 id와 같지 않을 때 true를 반환하여 그대로 남겨둠
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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
