import { Todo } from "@/types/todo.type";
import React from "react";

const SSGPage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    cache: "force-cache",
  });
  const data: Todo[] = await response.json();

  return <div>SSGPage: {JSON.stringify(data)}</div>;
};

export default SSGPage;
