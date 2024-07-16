import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import DashboardLayout from "../layout/DashboardLayout";
import SendMoney from "../components/dashboard/user/SendMoney";
import CashInRequest from "../components/dashboard/user/CashInRequest";
import CashOut from "../components/dashboard/user/CashOut";
import AgentManagement from "../components/dashboard/agent/AgentManagement";

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
      {
        path: "casinRequest",
        element: <CashInRequest />,
      },
      {
        path: "cashout",
        element: <CashOut />,
      },
      {
        path: "tranmanagements",
        element: <AgentManagement />,
      },
    ],
  },
]);

export default router;
