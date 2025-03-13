"use client";

import { Todo } from "@/types/todo.type";
import React, { useEffect, useState } from "react";

const CSRPage = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data: Todo[] = await response.json();

      setData(data);
    };

    getData();
  }, []);

  return <div>CSRPage: {JSON.stringify(data)}</div>;
};

export default CSRPage;
