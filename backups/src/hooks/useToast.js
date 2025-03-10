import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useToast = create(
  immer((set, get) => ({
    toasts: [],
    addToast: (message) => {
      set((prevState) => {
        const id = crypto.randomUUID();
        const { removeToast } = get();

        prevState.toasts.push({
          id,
          message,
        });

        setTimeout(() => {
          removeToast(id);
        }, 3000);
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
