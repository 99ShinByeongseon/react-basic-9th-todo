import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    addTodos,
    deleteTodo,
    getTodos,
    TodoFilter,
    toggleTodoCompleted,
} from "../api/todo-api";
import { useToast } from "./useToast";

export const useTodoQuery = (filter?: TodoFilter) => {
    return useQuery({
        queryKey: ["todos", filter],
        queryFn: () => getTodos(filter),
    });
};

export const useAddTodoMutation = () => {
    const queryClient = useQueryClient();
    const { addToast } = useToast();

    return useMutation({
        mutationFn: addTodos,
        onSuccess: () => {
            addToast("투두를 추가했습니다.");
        },
        onSettled: () => {
            return queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};

export const useToggleTodoMutation = () => {
    const queryClient = useQueryClient();
    const { addToast } = useToast();

    return useMutation({
        mutationFn: ({ id, completed }: { id: string; completed: boolean }) => 
            toggleTodoCompleted(id, completed),
        onSuccess: () => {
            addToast("투두의 완료 상태가 변경되었습니다.");
        },
        onSettled: () => {
            return queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};

export const useDeleteTodoMutation = () => {
    const queryClient = useQueryClient();
    const { addToast } = useToast();

    return useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            addToast("투두를 삭제했습니다.");
        },
        onSettled: () => {
            return queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};