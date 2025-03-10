import axios from "axios";
import { data } from "react-router";

export const todoClient = axios.create({
    baseURL: "http://localhost:3000/todos",
});

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type TodoFilter = "completed" | "pending";

export const getTodos = async (filter?: TodoFilter) => {
    const searchParams = new URLSearchParams();

    if (filter === "completed") {
        searchParams.append("completed", 'true');
    }

    if (filter === "pending") {
        searchParams.append("completed", 'false');
    }

    const { data } = await todoClient.get<Todo[]>(`?${searchParams.toString()}`);

    return data;
};

export const getTodoItem = async (id?: string) => {
    const { data } = await todoClient.get(`/${id}`);

    return data;
};


export const addTodos = async (text: string) => {
    const { data } = await todoClient.post("/", {
        text,
        completed : false, 
    });

    return data;
};

export const toggleTodoCompleted = async (id:string, currentCompleted: boolean) => {
    const { data } = await todoClient.patch(`/${id}`, {
        completed : !currentCompleted,
    });

    return data;
};

export const deleteTodo = async (id: string) => {
    const { data } = await todoClient.delete(`/${id}`);

    return data;
};