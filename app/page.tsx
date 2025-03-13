import { getTodos } from "@/api/todo-api";
import Link from "next/link";
import React from "react";

const Homepage = async () => {
  const todos = await getTodos();

  return (
    <div>
      Homepage
      <Link href="/detial">Detail Page</Link>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            {text} {completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
