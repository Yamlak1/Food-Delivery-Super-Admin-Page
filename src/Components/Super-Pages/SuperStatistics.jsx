import React from 'react';
import StatusGrid from './dashboardComponents/StatusGrid';
import TransactionChart from './dashboardComponents/TransactionChart';
import BuyerProfilePieChart from './dashboardComponents/BuyerProfileChart';
import RecentOrders from './dashboardComponents/RecentOrders';
import PopularProducts from './dashboardComponents/PopularProduct';

function Statistics() {
  return (
    <div className="flex flex-col gap-6 my-8">
      <StatusGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>{' '}
      <div className="flex flex-row gap-6 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>{' '}
    </div>
  );
}

export default Statistics;
