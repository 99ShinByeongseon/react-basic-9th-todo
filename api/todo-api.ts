'use server'

import { Todo } from "@/types/todo.type";
import { revalidateTag } from "next/cache";

const BASE_URL = "http://localhost:3000/todos";

export const getTodos = async () => {
  const response = await fetch(BASE_URL, {
    next: {
        tags: ["todos"],
    }
  });
  const data: Todo[] = await response.json();

  return data;
};

export const createTodo = async (text: string) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, completed: false }),
  });

  const data: Todo = await response.json();

  return data;
};

export const deleteTodo = async (id: Todo["id"]) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  const data: Todo = await response.json();

  revalidateTag("todos");

  return data;
};

export const toggleTodoCompleted = async (
  id: Todo["id"],
  completed: Todo["completed"]
) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Context-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  const data: Todo = await response.json();

  revalidateTag("todos");

  return data;
};
