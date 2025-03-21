import { getTodos } from "@/api/todo-api";
import TodoFilterSwitch from "@/components/todo/TodoFilterSwitch";
import TodoFrom from "@/components/todo/TodoFrom";
import TodoList from "@/components/todo/TodoList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container p-2 mx-auto space-y-4">
          <TodoFrom />
          <div className="flex flex-row justify-end">
            <TodoFilterSwitch />
          </div>
          <TodoList />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default HomePage;
