import React, { useEffect, useState } from 'react';
import { handleAllUser, handleGetUser } from '../../services/userServices';

function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleAllUser();
        setUsers(data || []);
      } catch (error) {
        console.error('Error fetching Users : ', error);
        setUsers([]);
      }
    };
    fetchData();
  });

  return (
    <div className="mx-auto mt-16 font-poppins text-lg px-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 w-[1400px]">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search{' '}
          </label>{' '}
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
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
              className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5 bg-white placeholder-gray-400"
              placeholder="Search for restaurants"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />{' '}
          </div>{' '}
        </div>{' '}
        <table className="w-full text-base text-left text-gray-700 bg-gray-100">
          <thead className="text-base text-gray-900 uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                {' '}
                Name{' '}
              </th>{' '}
              <th scope="col" className="px-6 py-3">
                {' '}
                Email{' '}
              </th>{' '}
              <th scope="col" className="px-6 py-3">
                {' '}
                Phone{' '}
              </th>{' '}
            </tr>{' '}
          </thead>{' '}
          <tbody>
            {' '}
            {users
              .filter((user) =>
                user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-200 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {' '}
                    {user.fullName}{' '}
                  </th>{' '}
                  <td className="px-6 py-4"> {user.email} </td>{' '}
                  <td className="px-6 py-4"> {user.phone} </td>{' '}
                </tr>
              ))}{' '}
          </tbody>{' '}
        </table>{' '}
      </div>{' '}
    </div>
  );
}

export default Users;
