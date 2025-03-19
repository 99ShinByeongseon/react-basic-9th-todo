import { createTodo, deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

interface ToggleTodoMutationParams {
    id: Todo["id"];
    completed: Todo["completed"];
}

export const useToggleTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, completed }: ToggleTodoMutationParams) =>
            toggleTodoCompleted(id, completed),
        onSettled: async () => {
            return await queryClient.invalidateQueries({
                queryKey: ["todos"],
            });
        },
    });
};