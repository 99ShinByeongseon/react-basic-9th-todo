import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
    { id: 8, text: "Read a book" },
    { id: 9, text: "Do laundry" },
    { id: 10, text: "Write code" },
];

const TodoList = () => {
    const [todos, setTodos] = useState(SAMPLE_TODOS);
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!todoText.trim()) {
            return;
        }

        setTodos([{id: crypto.randomUUID(), text: todoText }, ...todos]);

        setTodoText("");
    };

    const handleChangeTodoText = (e) => {
        setTodoText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoText} onChange={handleChangeTodoText} />
                <button type="submit">제출하기</button>
            </form>
        <ul>
            {todos.map(({ id, text }) => (
                <li key={id}>{text}</li>
            ))}
        </ul>
        </div>
    );
};

export default TodoList