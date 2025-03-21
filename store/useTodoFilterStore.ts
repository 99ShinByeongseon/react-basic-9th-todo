import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export type FilterType = "all" | "completed";

interface TodoFilterState {
  filter: FilterType;
}

const initialState: TodoFilterState = {
  filter: "all",
};

export const useTodoFilterStore = create(
  persist(
    combine(initialState, (set) => ({
      setFilter: (filter: FilterType) => set({ filter }),
    })),
    { name: "todo-filter-storage" }
  )
);
