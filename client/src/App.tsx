import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Login />
    </RouterProvider>
  );
}

export default App;
