"use client";

import React from "react";
import TodoItem from "./TodoItem";
import { useTodosQuery } from "@/query/useTodoQuery";

const TodoList = () => {
  const { data: todos } = useTodosQuery();

  return (
    <ul className="space-y-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
            <TodoItem todo={todo} />
            </li>
      ))}
    </ul>
  );
};

export default TodoList;