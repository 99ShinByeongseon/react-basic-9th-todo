import { TodoContext } from "../../context/TodoContext";

const TodoProvider = ({ children }) => {
    return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};

export default TodoProvider;