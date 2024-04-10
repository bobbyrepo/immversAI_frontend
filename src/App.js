import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import Tickets from "./pages/Tickets";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    // { path: "/", element: <LoginPage /> },
    { path: "/", element: <Tickets /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return (
    <div className="mx-10">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
