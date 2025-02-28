import { Outlet } from "react-router";

// Compositional Layout
const RootLayout = () => {
  return (
    <main className="min-h-screen bg-[#f6f5f8] dark:bg-slate-800">
      <div className="max-w-3xl mx-auto p-4">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;