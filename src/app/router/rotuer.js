import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
]);

export default router;
