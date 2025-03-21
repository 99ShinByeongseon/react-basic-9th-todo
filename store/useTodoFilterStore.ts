import { create } from "zustand";
import { combine } from "zustand/middleware";

export type FilterType = "all" | "completed";

interface TodoFilterState {
  filter: FilterType;
}

const initialState: TodoFilterState = {
  filter: "all",
};

export const useTodoFilterStore = create(
  combine(initialState, (set) => ({
    setFilter: (filter: FilterType) => set({ filter }),
  }))
);
