import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface initialState {
  theme: Theme;
}

const initialState: initialState = {
  theme: "light",
};

export const useThemeStore = create(
  persist(
    combine(initialState, (set) => ({
      setTheme: (theme: Theme) => set({ theme }),
    })),
    {
      name: "theme-storage",
    }
  )
);
