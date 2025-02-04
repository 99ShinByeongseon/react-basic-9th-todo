import { useState } from "react";

const TodoForm = ({ addTodos }) => {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!todoText.trim()) {
          return;
        }
    
        addTodos(todoText);
        
        setTodoText("");
      };
    
    const handleChangeTodoText = (e) => {
        setTodoText(e.target.value);
      };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={handleChangeTodoText} />
      <button type="submit">제출하기</button>
    </form>
  );
};

export default TodoForm;
