import { Todo } from "@/types/todo.type";
import React from "react";

const ONE_MINUTE_SECONDS = 60;

const ISRPage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    next: {
      revalidate: ONE_MINUTE_SECONDS,
    },
  });
  const data: Todo[] = await response.json();

  return <div>ISRPage: {JSON.stringify(data)}</div>;
};

export default ISRPage;
