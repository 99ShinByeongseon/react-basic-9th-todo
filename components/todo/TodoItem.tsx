'use client'

import { deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const { completed, id, text } = todo;
  return (
    <div>
      <h2>{text}</h2>
      <p>{completed ? "완료" : "미완료"}</p>

      <div>
        <button onClick={() => toggleTodoCompleted(id, !completed)}>완료하기</button>
        <button onClick={() => deleteTodo(id)}>삭제하기</button>
      </div>
    </div>
  );
};

export default TodoItem;
