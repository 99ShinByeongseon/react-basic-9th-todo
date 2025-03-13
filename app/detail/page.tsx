import Link from "next/link";
import React from "react";

const DetailPage = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await data.json();

  return (
    <div>
      DetailPage
      <h1>{todo.title}</h1>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default DetailPage;
