import React, { useState, useEffect } from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';

import {
  getTotalCompletedDelivery,
  getTotalRestaurant,
  getAllUser,
  TotalOrders,
} from '../../../services/dashboardServices'; // Import the service

function StatusGrid() {
  const [completedDeliveryCount, setCompletedDeliveryCount] = useState(0);
  const [totalRestaurants, setTotalRestaurants] = useState(0);
  const [totalUser, setUsers] = useState(0);
  const [totalOrders, setTotalOrder] = useState(0);

  useEffect(() => {
    const fetchAllOrders = async () => {
      const orderData = await TotalOrders();
      if (orderData) {
        setTotalOrder(orderData.length); // Assuming restaurantData has a 'total' field
      }
    };

    fetchAllOrders();
  }, []);

  useEffect(() => {
    const fetchAllUser = async () => {
      const userData = await getAllUser();
      if (userData) {
        setUsers(userData.length); // Assuming restaurantData has a 'total' field
      }
    };

    fetchAllUser();
  }, []);

  useEffect(() => {
    const fetchTotalRestaurants = async () => {
      const restaurantData = await getTotalRestaurant();
      if (restaurantData) {
        setTotalRestaurants(restaurantData.length); // Assuming restaurantData has a 'total' field
      }
    };

    fetchTotalRestaurants();
  }, []);
  useEffect(() => {
    const fetchCompletedDelivery = async () => {
      const completedDeliveries = await getTotalCompletedDelivery();
      if (completedDeliveries) {
        setCompletedDeliveryCount(completedDeliveries.length);
      }
    };

    fetchCompletedDelivery();
  }, []);
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Completed Deliveries
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {completedDeliveryCount}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Restaurants
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {totalRestaurants} {/* Display total restaurant count */}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>{' '}
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            {' '}
            Total Customers{' '}
          </span>{' '}
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {' '}
              {totalUser}{' '}
            </strong>{' '}
          </div>{' '}
        </div>{' '}
      </BoxWrapper>{' '}
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>{' '}
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            {' '}
            Total Orders{' '}
          </span>{' '}
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {' '}
              {totalOrders}{' '}
            </strong>{' '}
          </div>{' '}
        </div>{' '}
      </BoxWrapper>{' '}
    </div>
  );
}

export default StatusGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {' '}
      {children}{' '}
    </div>
  );
}
