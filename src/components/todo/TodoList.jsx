import TodoItem from "./TodoItem";


const TodoList = ({todos, handleToggleCompleted, handleDelete}) => {
  return (
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
  );
};

export default TodoList;