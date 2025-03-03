import { create } from "zustand";

export const useToast = create((set) => ({
  toasts: [],
  addToast: (message) => {
    set((prevState) => {
      const toastId = crypto.randomUUID();

      return {
        toasts: [
          ...prevState.toasts,
          {
            id: toastId,
            message,
          },
        ],
      };
    });
  },
  removeToast: (toastId) => {
    set((prevState) => ({
      toasts: prevState.toasts.filter((prevToast) => prevToast.id !== toastId),
    }));
  },
}));
