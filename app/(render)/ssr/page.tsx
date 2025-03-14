import { Todo } from "@/types/todo.type";

const SSRPage = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const data: Todo[] = await response.json();

  return <div>SSRPage: {JSON.stringify(data)}</div>;
};

export default SSRPage;