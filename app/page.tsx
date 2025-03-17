import TodoFrom from "@/components/todo/TodoFrom";
import TodoList from "@/components/todo/TodoList";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="container p-2 mx-auto space-y-4">
        <TodoFrom />
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
