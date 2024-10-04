import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

// Register chart.js components
Chart.register(...registerables);

function About() {
  const fullName = Cookies.get('full_name');
  const email = Cookies.get('email');
  const userType = Cookies.get('user_type');
  const image = Cookies.get('image');
  const reporterId = Cookies.get('id'); // Get the reporter's ID from cookies

  const [restaurantNames, setRestaurantNames] = useState([]);
  const [restaurantLocations, setRestaurantLocations] = useState([]);
  const [restaurantCreationDates, setRestaurantCreationDates] = useState([]);
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [totalRestaurants, setTotalRestaurants] = useState(0);
  const [report, setReport] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Add state for submission status

  // Ensure image path is correctly formatted
  const imageUrl = image ? `${image}` : 'path-to-default-image'; // Ensure this path is correct

  // Fetch registered restaurants data
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const adminId = Cookies.get('id'); // Assuming adminId is stored in cookies
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

  const handleReportChange = (e) => {
    setReport(e.target.value);
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting...'); // Debugging line
    setIsSubmitting(true); // Set the state to true when submitting

    try {
      if (!report) {
        alert('Please enter a report before submitting.');
        setIsSubmitting(false); // Reset state on error
        return;
      }

      // Submit the report data
      await axios.post('http://localhost:7000/admin/createReport', {
        report,
        reporterId,
      });
      console.log(report);
      alert('Report submitted successfully!');
      setReport(''); // Clear the textarea after submission
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Failed to submit report.');
    } finally {
      setIsSubmitting(false); // Set the state to false when done
      console.log('Submission ended.'); // Debugging line
    }
  };

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
    <div className="flex">
      <div className="ml-10">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-16 max-w-96">
          <h1 className="text-2xl font-bold"> About </h1>{' '}
          <div>
            <img
              src={imageUrl}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto"
              onError={(e) => (e.target.src = 'path-to-default-image')} // Fallback image in case of error
              style={{ display: 'block', margin: 'auto' }} // Centering the image
            />{' '}
            <p className="text-lg mt-4">
              <strong> Full Name: </strong> {fullName}{' '}
            </p>{' '}
            <p className="text-lg">
              <strong> Email: </strong> {email}{' '}
            </p>{' '}
            <p className="text-lg">
              <strong> User Type: </strong> {userType}{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="p-4 max-w-96 bg-gray-100 mt-10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Restaurant Registration Comparison{' '}
          </h2>{' '}
          {restaurantCount > 0 || totalRestaurants > 0 ? (
            <Pie data={data} options={options} />
          ) : (
            <p> No registered restaurants to display. </p>
          )}{' '}
        </div>{' '}
      </div>{' '}
      <div className="mt-16 pl-14 flex-1">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="text-base text-gray-900 uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Restaurant Name{' '}
              </th>{' '}
              <th scope="col" className="px-6 py-3">
                Location{' '}
              </th>{' '}
              <th scope="col" className="px-6 py-3">
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
                  <td className="px-6 py-3"> {restaurantLocations[index]} </td>{' '}
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
                  No restaurants found{' '}
                </td>{' '}
              </tr>
            )}{' '}
          </tbody>{' '}
        </table>{' '}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4"> Create Report </h2>{' '}
          <form
            onSubmit={handleReportSubmit}
            className="bg-gray-100 p-4 rounded-lg shadow-md">
            <textarea
              value={report}
              onChange={handleReportChange}
              rows="4"
              placeholder="Enter your report here..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className={`mt-4 py-2 px-4 rounded-md ${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
              disabled={isSubmitting}>
              {' '}
              {isSubmitting ? 'Submitting...' : 'Submit Report'}{' '}
            </button>{' '}
          </form>{' '}
        </div>{' '}
        <div className="mt-10 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Request Password Change{' '}
          </h2>{' '}
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Submit Request{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default About;
