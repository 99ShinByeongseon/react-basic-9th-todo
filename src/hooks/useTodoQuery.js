import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todo-api";

export const useTodoQuery = (filter) => {
    return useQuery({
        queryKey: ["todos", filter],
        queryFn: () => getTodos(filter),
    });
};