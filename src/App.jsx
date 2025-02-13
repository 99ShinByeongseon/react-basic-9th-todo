import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import TodoDetailPage from "./pages/TodoDetailPage";
import TodoProvider from "./components/provider/TodoProvider";

const App = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todos/:id" element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
};

export default App;
