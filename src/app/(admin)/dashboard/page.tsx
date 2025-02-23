import { Dashboard } from "@/app/api/dashboard/route";
import React from "react";

const getDashBoard = async () => {
  const response = await fetch("http://localhost:3000/api/dashboard");
  return await response.json();
};

const AdminDashboardPage = async () => {
  const dashboard = (await getDashBoard()).dashboard as Dashboard;
  return (
    <div>
      <div>AdminDashboardPage</div>
      <div>The dashboard is {dashboard.name}</div>
    </div>
  );
};

export default AdminDashboardPage;
