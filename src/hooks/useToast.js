import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useToast = create(
  immer((set) => ({
    toasts: [],
    addToast: (message) => {
      set((prevState) => {
        const id = crypto.randomUUID();

        prevState.toasts.push({
          id,
          message,
        });
      });
    },
    removeToast: (toastId) => {
      set((prevState) => {
        const targetIndex = prevState.toasts.findIndex(
          (prevToast) => prevToast.id === toastId
        );

        if (targetIndex !== -1) {
          prevState.toasts.splice(targetIndex, 1);
        }
      });
    },
  }))
);
