import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useToast } from "../hooks/useToast";

const Toaster = () => {
  const { toasts } = useToast();
  const [parent] = useAutoAnimate();

  return (
    // 부모로 css 이동
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-80">
      <ul ref={parent} className="space-y-2">
        {toasts.map(({ id, message }) => (
          <li key={id} className="bg-white rounded-md shadow px-4 py-2 w-full">
            👍 {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toaster;
