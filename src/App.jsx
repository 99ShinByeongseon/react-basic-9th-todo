import RootLayout from "./components/layout/RootLayout";
import TodoProvider from "./components/provider/TodoProvider";
import TodoContainer from "./components/todo/TodoContainer";

const App = () => {
  return (
    <TodoProvider>
      <RootLayout>
        <TodoContainer />
      </RootLayout>
    </TodoProvider>
  );
};

export default App;
