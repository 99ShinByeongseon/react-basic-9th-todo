import TodoProvider from "../components/provider/TodoProvider"
import TodoContainer from "../components/provider/TodoProvider"

const HomePage = () => {
    return (
        <TodoProvider>
        <TodoContainer />
        </TodoProvider>
    );
};

export default HomePage;