import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Toast {
  id: string;
  message: string;
}

interface InitailState {
  toasts: Toast[];
}

const initialState: InitailState = {
  toasts: [],
}

export const useToast = create(
  immer(combine(initialState, (set) =>{

    const addToast = (message: Toast['message']) => {
      set((prevState) => {
        const id = crypto.randomUUID();

        prevState.toasts.push({
          id,
          message,
        });

        setTimeout(() => {
          removeToast(id);
        }, 3000);
      });
    }

    const removeToast = (toastId: Toast['id']) => {
      set((prevState) => {
        const targetIndex = prevState.toasts.findIndex(
          (prevToast: Toast) => prevToast.id === toastId
        );

        if (targetIndex !== -1) {
          prevState.toasts.splice(targetIndex, 1);
        }
      });
    }

    return ({
      addToast,
      removeToast,
    })
  })
)
);
