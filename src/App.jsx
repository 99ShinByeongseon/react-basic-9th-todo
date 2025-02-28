import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import QueryProvider from "./components/provider/QueryProvider";
import HomePage from "./pages/HomePage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { useEffect } from "react";
import { useThemeStore } from "./hooks/useThemeStore";

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;

    // 현재 테마 초기화
    root.classList.remove("dark", "light");

    // 테마 설정
    root.classList.add(theme);
  }, [theme]);
  
  return (
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todos/:id" element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </QueryProvider>
    </BrowserRouter>
  );
};

export default App;
