import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen md:flex relative">
      <div className="bg-orange-600">
        <Sidebar />
      </div>
      <div className="flex-1 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;