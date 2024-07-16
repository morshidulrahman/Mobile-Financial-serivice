import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import DashboardLayout from "../layout/DashboardLayout";
import SendMoney from "../components/dashboard/user/SendMoney";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <h1>dashboard</h1>,
      },
      {
        path: "send-money",
        element: <SendMoney />,
      },
    ],
  },
]);

export default router;
