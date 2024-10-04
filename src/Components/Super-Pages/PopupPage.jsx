// Popup.js
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

// Register chart.js components
Chart.register(...registerables);

function Popup({ employee, onClose }) {
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [restaurantLocations, setRestaurantLocations] = useState([]);
  const [restaurantCreationDates, setRestaurantCreationDates] = useState([]);
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [totalRestaurants, setTotalRestaurants] = useState(0);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const adminId = employee.id; // Assuming adminId is stored in cookies
        if (!adminId) {
          console.error('Admin ID is missing in cookies');
          return;
        }

        const response = await axios.get(
          `http://localhost:7000/admin/registeredRestaurants?adminId=${adminId}`
        );
        setRestaurantNames(response.data.restaurants);
        setRestaurantLocations(response.data.restaurantLocation);
        setRestaurantCreationDates(response.data.restaurantCreationDate);
        setRestaurantCount(response.data.numberOfRestaurants);

        const totalResponse = await axios.get(
          `http://localhost:7000/admin/getAllRegisteredRestaurants`
        );
        setTotalRestaurants(totalResponse.data.totalRestaurants);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  // Pie chart data and options
  const data = {
    labels: ['Admin Registered', 'Other Registered'],
    datasets: [
      {
        label: 'Restaurant Registration Comparison',
        data: [restaurantCount, totalRestaurants - restaurantCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center  z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[900px] max-h-[80vh] overflow-y-auto mt-10 ml-20">
        <h2 className="text-2xl font-semibold mb-4"> Employee Details </h2>{' '}
        <p>
          {' '}
          <strong> Name: </strong> {employee.fullName}{' '}
        </p>{' '}
        <p>
          {' '}
          <strong> Email: </strong> {employee.email}{' '}
        </p>{' '}
        <p>
          {' '}
          <strong> User Type: </strong> {employee.user_type}{' '}
        </p>{' '}
        <p>
          {' '}
          <strong> Phone: </strong> {employee.phone}{' '}
        </p>{' '}
        <div className="p-4 bg-gray-100 mt-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            {' '}
            Restaurant Registration Comparison{' '}
          </h2>{' '}
          {restaurantCount > 0 || totalRestaurants > 0 ? (
            <div className="w-[300px] h-[300px] mx-auto">
              <Pie data={data} options={options} />{' '}
            </div>
          ) : (
            <p> No registered restaurants to display. </p>
          )}{' '}
        </div>{' '}
        <div className="mt-6">
          <table className="bg-white border border-gray-300 w-full">
            <thead className="text-base text-gray-900 uppercase bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {' '}
                  Restaurant Name{' '}
                </th>{' '}
                <th scope="col" className="px-6 py-3">
                  {' '}
                  Location{' '}
                </th>{' '}
                <th scope="col" className="px-6 py-3">
                  {' '}
                  Date Added{' '}
                </th>{' '}
              </tr>{' '}
            </thead>{' '}
            <tbody>
              {' '}
              {restaurantNames.length > 0 ? (
                restaurantNames.map((name, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3"> {name} </td>{' '}
                    <td className="px-6 py-3">
                      {' '}
                      {restaurantLocations[index]}{' '}
                    </td>{' '}
                    <td className="px-6 py-3">
                      {' '}
                      {new Date(
                        restaurantCreationDates[index]
                      ).toLocaleDateString()}{' '}
                    </td>{' '}
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-3" colSpan="3">
                    {' '}
                    No restaurants found{' '}
                  </td>{' '}
                </tr>
              )}{' '}
            </tbody>{' '}
          </table>{' '}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onClose}>
            Close{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default Popup;
