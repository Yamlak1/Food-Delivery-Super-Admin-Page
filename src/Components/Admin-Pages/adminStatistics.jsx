import React from "react";
import StatusGrid from "../Super-Pages/dashboardComponents/StatusGrid";
import TransactionChart from "../Super-Pages/dashboardComponents/TransactionChart";
import BuyerProfilePieChart from "../Super-Pages/dashboardComponents/BuyerProfileChart";
import RecentOrders from "../Super-Pages/dashboardComponents/RecentOrders";
import PopularProducts from "../Super-Pages/dashboardComponents/PopularProduct";

function AdminStatistics() {
  return (
    <div className="flex flex-col gap-6 my-8">
      <StatusGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>{" "}
      <div className="flex flex-row gap-6 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>{" "}
    </div>
  );
}

export default AdminStatistics;
