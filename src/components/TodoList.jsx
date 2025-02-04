import { useState } from "react";
import TodoItem from "./todo/TodoItem";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    setTodos([
      { id: crypto.randomUUID(), text: todoText, completed: false },
      ...todos,
    ]);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleToggleCompleted = (id) => {
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

  const handleDelete = (id) => {
    // todo.id가 내가 찾는 id와 같지 않을 때 true를 반환하여 그대로 남겨둠
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={handleChangeTodoText} />
        <button type="submit">제출하기</button>
      </form>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <TodoItem 
          key={id} 
          completed={completed} 
          text={text} 
          handleToggleCompleted={handleToggleCompleted}
          handleDelete={handleDelete}
          id={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
