import TodoProvider from "../components/provider/TodoProvider";
import TodoContainer from "../components/todo/TodoContainer";

const HomePage = () => {
    return (
        <TodoProvider>
            <TodoContainer />
        </TodoProvider>
    );
};

export default HomePage;