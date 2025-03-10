import TodoDashboard from "./TodoDashboard";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <section className="flex flex-col gap-12">
      <TodoDashboard />
      <TodoForm />
      <TodoList />
      </section>
  );
};

export default TodoContainer;
