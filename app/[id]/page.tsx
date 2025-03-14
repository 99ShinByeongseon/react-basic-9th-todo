import { getTodoItem } from "@/api/todo-api";
import TodoItem from "@/components/todo/TodoItem";
import React from "react";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const todoItem = await getTodoItem(id);

  return (
    <section>
      <TodoItem todo={todoItem} />
    </section>
  );
};

export default DetailPage;
