import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { TotalOrders } from '../../../services/dashboardServices'; // Adjust the import path as necessary

// Define colors for each status
const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#FF5733']; // Added color for Pending
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BuyerProfilePieChart() {
  const [orderData, setOrderData] = useState([]);

  const fetchTotalOrders = async () => {
    const totalOrders = await TotalOrders(); // Call your existing TotalOrders function

    // Count the orders by status
    const totalOrdersCount = {
      complete: 0,
      canceled: 0,
      delivering: 0,
      pending: 0,
    };

    // Process the total orders
    if (totalOrders) {
      totalOrders.forEach((order) => {
        if (order.status === 'completed') {
          totalOrdersCount.complete++;
        } else if (order.status === 'canceled') {
          totalOrdersCount.canceled++;
        } else if (order.status === 'delivery man received') {
          totalOrdersCount.delivering++;
        } else if (order.status === 'pending') {
          totalOrdersCount.pending++;
        }
      });
    }

    // Set the processed order data for the pie chart
    setOrderData([
      { name: 'Complete', value: totalOrdersCount.complete },
      { name: 'Canceled', value: totalOrdersCount.canceled },
      { name: 'Delivering', value: totalOrdersCount.delivering },
      { name: 'Pending', value: totalOrdersCount.pending },
    ]);
  };

  useEffect(() => {
    fetchTotalOrders();
  }, []);

  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Buyer Profile</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderData}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value">
              {orderData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
