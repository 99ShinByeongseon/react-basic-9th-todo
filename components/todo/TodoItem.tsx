'use client'

import { Todo } from "@/types/todo.type";
import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <h2>{todo.text}</h2>
      <p>{todo.completed ? "완료" : "미완료"}</p>

      <div>
        <button>완료하기</button>
        <button>삭제하기</button>
      </div>
    </div>
  );
};

export default TodoItem;
