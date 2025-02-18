import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Loader from "./components/Loader/Loader.jsx";

const waitPromise = (time) => new Promise((resolve) => setTimeout(resolve, time));

const App = lazy(() => waitPromise(3000).then(() => import("./App.jsx")));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-svh min-w-full  flex justify-center items-center"><Loader/></div>}>
      <App />
    </Suspense>
  </StrictMode>
);
