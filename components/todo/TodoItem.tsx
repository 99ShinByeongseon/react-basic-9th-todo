"use client";

import { deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;

  return (
    <div>
      <Link href={`/${id}`}>
      <h2>{text}</h2>
      </Link>
      <p>{completed ? "완료" : "미완료"}</p>

      <div>
        <button onClick={() => toggleTodoCompleted(id, !completed)}>
          {completed ? "취소" : "완료"}
        </button>
        <button onClick={() => deleteTodo(id)}>삭제하기</button>
      </div>
    </div>
  );
};

export default TodoItem;
