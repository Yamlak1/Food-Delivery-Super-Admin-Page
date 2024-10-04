// EmpInfo.js
import React, { useEffect, useState } from 'react';
import { getAllEmp, getEmpByName } from '../../services/adminServices';
import Popup from './PopupPage'; // Import the Popup component

function AdminInfo() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null); // For managing selected employee for popup
  const [showPopup, setShowPopup] = useState(false); // For controlling popup visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEmp();
        setEmployees(data || []);
      } catch (error) {
        console.error('Error fetching employees: ', error);
        setEmployees([]);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = async (employeeName, id) => {
    try {
      console.log('employeeName: ', employeeName);
      console.log('Emp id : ', id);
      const employeeData = await getEmpByName(employeeName); // Fetch employee by name
      setSelectedEmployee(employeeData); // Set the selected employee for the popup
      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error('Error fetching employee details:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedEmployee(null); // Reset selected employee on close
  };

  return (
    <div className="mx-auto mt-16 font-poppins text-lg px-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            {' '}
            Search{' '}
          </label>{' '}
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd">
                  {' '}
                </path>{' '}
              </svg>{' '}
            </div>{' '}
            <input
              type="text"
              id="table-search"
              className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-96 pl-10 p-2.5"
              placeholder="Search for employee"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />{' '}
          </div>{' '}
        </div>{' '}
        <table className="w-full text-base text-left text-gray-700 bg-gray-100">
          <thead className="text-base text-gray-900 uppercase bg-gray-300">
            <tr>
              <th className="px-6 py-3"> Name </th>{' '}
              <th className="px-6 py-3"> Email </th>{' '}
              <th className="px-6 py-3"> User Type </th>{' '}
              <th className="px-6 py-3"> Phone Number </th>{' '}
              <th className="px-6 py-3"> Image </th>{' '}
              <th className="px-6 py-3"> Actions </th>{' '}
            </tr>{' '}
          </thead>{' '}
          <tbody>
            {' '}
            {employees
              .filter((employee) =>
                employee.fullName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((employee) => (
                <tr key={employee.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {' '}
                    {employee.fullName}{' '}
                  </td>{' '}
                  <td className="px-6 py-4"> {employee.email} </td>{' '}
                  <td className="px-6 py-4"> {employee.user_type} </td>{' '}
                  <td className="px-6 py-4"> {employee.phone} </td>{' '}
                  <td className="px-6 py-4">
                    <img
                      src={`http://localhost:7000${employee.image}`}
                      alt={employee.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>{' '}
                  <td className="px-6 py-4">
                    <button
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() =>
                        handleDetailsClick(employee.fullName, employee.id)
                      }>
                      Details{' '}
                    </button>{' '}
                  </td>{' '}
                </tr>
              ))}{' '}
          </tbody>{' '}
        </table>{' '}
        {showPopup && selectedEmployee && (
          <Popup employee={selectedEmployee} onClose={handleClosePopup} />
        )}{' '}
      </div>{' '}
    </div>
  );
}

export default AdminInfo;
