import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getTop5Orders } from '../../../services/adminServices';

export default function RecentOrders() {
  const [recentOrders, setRecentOrders] = useState([]);
  const [locations, setLocations] = useState({}); // Store fetched addresses

  const fetchOrders = async () => {
    try {
      const orders = await getTop5Orders();
      setRecentOrders(orders);
      orders.forEach((order) =>
        fetchLocation(order.id, order.latitude, order.longitude)
      );
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchLocation = async (orderId, latitude, longitude) => {
    const apiKey = 'AIzaSyDYSpYfL7STpcZ8Dd6K23OoGxw2ig461cg'; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK') {
        const address = data.results[0]?.formatted_address;
        setLocations((prev) => ({ ...prev, [orderId]: address }));
      } else {
        setLocations((prev) => ({ ...prev, [orderId]: 'Address not found' }));
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      setLocations((prev) => ({
        ...prev,
        [orderId]: 'Error fetching address',
      }));
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const isValidDate = (date) => !isNaN(Date.parse(date));

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium"> Recent Orders </strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700 items-center">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Product ID</th>
              <th className="text-center">Customer Name</th>
              <th className="text-center">Order Date</th>
              <th className="text-center">Order Total</th>
              <th className="text-center">Shipping Address</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="text-center">
                  <Link to={`/order/${order.id}`}>#{order.id}</Link>
                </td>
                <td className="text-center">
                  <Link to={`/product/${order.menu.id}`}>#{order.menu.id}</Link>
                </td>
                <td className="text-center">
                  <Link to={`/customer/${order.customer_id}`}>
                    {order.customer.fullName}
                  </Link>
                </td>
                <td className="text-center">
                  {isValidDate(order.createdAt)
                    ? format(new Date(order.createdAt), 'dd MMM yyyy')
                    : 'Invalid date'}
                </td>
                <td className="text-center">{order.totalPrice}</td>
                <td className="text-center">
                  {locations[order.id] ||
                    `${order.latitude}, ${order.longitude}`}{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
