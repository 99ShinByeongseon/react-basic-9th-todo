"use client";

import { deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;

  return (
    <article className="flext flex-row items-center justify-between p-4 rounded-md border">
      <Link 
      href={`/${id}`} 
      className={cn("hover:underline", {
        "line-through": completed,
      })}
      >
      <h2>{text}</h2>
      </Link>

      <div className="space-x-2">
        <Button onClick={() => toggleTodoCompleted(id, !completed)} 
        variant="outline"
        >
          {completed ? "취소" : "완료"}
        </Button>
        <Button onClick={() => deleteTodo(id)} variant="destructive">
          삭제
          </Button>
      </div>
    </article>
  );
};

export default TodoItem;
