import { useToast } from "../hooks/useToast";

const Toaster = () => {
    const { toasts } = useToast();

    return (
        <ul className="fixed top-4 left-1/2 z-40 space-y-2 -translate-x-1/2">
            {toasts.map((toast) => (
                <li key={toast.id} className="bg-white rounded-md shadow px-4 py-2">
                    👍 {toast.message}
                </li>
            ))}
        </ul>
    );
};

export default Toaster;