import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    addTodos,
    deleteTodo,
    getTodos,
    toggleTodoCompleted,
} from "../api/todo-api";

export const useTodoQuery = (filter) => {
    return useQuery({
        queryKey: ["todos", filter],
        queryFn: () => getTodos(filter),
    });
};

export const useAddTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addTodos,
        onSettled: () => {
            return queryClient.invalidateQueries(["todos"]);
        },
    });
};

export const useToggleTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, completed }) => toggleTodoCompleted(id, completed),
        onSettled: () => {
            return queryClient.invalidateQueries(["todos"]);
        },
    });
};

export const useDeleteTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTodo,
        onSettled: () => {
            return queryClient.invalidateQueries(["todos"]);
        },
    });
};