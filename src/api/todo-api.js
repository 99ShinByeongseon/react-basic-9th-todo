import axios from "axios";

export const todoClient = axios.create({
    baseURL: "http://localhost:3000/todos",
});

export const getTodos = async (filter) => {
    const searchParams = new URLSearchParams();

    if (filter === "completed") {
        searchParams.append("completed", true);
    }

    if (filter === "pending") {
        searchParams.append("completed", false);
    }

    const { data } = await todoClient.get(`?${searchParams.toString()}`);

    return data;
};


export const addTodos = async (text) => {
    const { data } = await todoClient.post("/", {
        text,
        completed : false, 
    });

    return data;
};

export const toggleTodoCompleted = async (id, currentCompleted) => {
    const { data } = await todoClient.patch(`/${id}`, {
        completed : !currentCompleted,
    });

    return data;
};

export const deleteTodo = async (id) => {
    const { data } = await todoClient.delete(`/${id}`);

    return data;
};