import React from "react";

function ViewRestaurant() {
  return (
    <div className="mx-auto mt-16 font-poppins text-lg px-10 ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search{" "}
          </label>{" "}
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>{" "}
              </svg>{" "}
            </div>{" "}
            <input
              type="text"
              id="table-search"
              className="border border-gray-300 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5 bg-[#652023] placeholder-gray-40"
              placeholder="Search for restaurants"
            />
          </div>{" "}
        </div>{" "}
        <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
          <thead className="text-lg text-black uppercase bg-[#D9D9D9]">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                Restaurant Name{" "}
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                Location{" "}
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                Cuisine{" "}
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                Rating{" "}
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only"> Edit </span>{" "}
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only"> Remove </span>{" "}
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Bistro Cafe{" "}
              </th>{" "}
              <td className="px-6 py-4"> New York </td>{" "}
              <td className="px-6 py-4"> Italian </td>{" "}
              <td className="px-6 py-4"> 4.5 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Sushi House{" "}
              </th>{" "}
              <td className="px-6 py-4"> San Francisco </td>{" "}
              <td className="px-6 py-4"> Japanese </td>{" "}
              <td className="px-6 py-4"> 4.7 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                The Vegan Spot{" "}
              </th>{" "}
              <td className="px-6 py-4"> Los Angeles </td>{" "}
              <td className="px-6 py-4"> Vegan </td>{" "}
              <td className="px-6 py-4"> 4.9 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-4"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-4" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Thai Delight{" "}
              </th>{" "}
              <td className="px-6 py-4"> Miami </td>{" "}
              <td className="px-6 py-4"> Thai </td>{" "}
              <td className="px-6 py-4"> 4.8 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-5"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-5" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Burger Joint{" "}
              </th>{" "}
              <td className="px-6 py-4"> Chicago </td>{" "}
              <td className="px-6 py-4"> American </td>{" "}
              <td className="px-6 py-4"> 4.6 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-6"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-6" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Indian Spice{" "}
              </th>{" "}
              <td className="px-6 py-4"> Seattle </td>{" "}
              <td className="px-6 py-4"> Indian </td>{" "}
              <td className="px-6 py-4"> 4.7 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-7"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-7" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                French Bistro{" "}
              </th>{" "}
              <td className="px-6 py-4"> Boston </td>{" "}
              <td className="px-6 py-4"> French </td>{" "}
              <td className="px-6 py-4"> 4.8 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-8"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-8" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Mediterranean Grill{" "}
              </th>{" "}
              <td className="px-6 py-4"> Austin </td>{" "}
              <td className="px-6 py-4"> Mediterranean </td>{" "}
              <td className="px-6 py-4"> 4.5 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-9"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-9" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Mexican Fiesta{" "}
              </th>{" "}
              <td className="px-6 py-4"> Houston </td>{" "}
              <td className="px-6 py-4"> Mexican </td>{" "}
              <td className="px-6 py-4"> 4.6 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-10"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-10" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Greek Tavern{" "}
              </th>{" "}
              <td className="px-6 py-4"> Denver </td>{" "}
              <td className="px-6 py-4"> Greek </td>{" "}
              <td className="px-6 py-4"> 4.7 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
            <tr className="bg-[#652023] border-b dark:border-gray-700 hover:bg-[#7a7575]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-11"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-11" className="sr-only">
                    checkbox{" "}
                  </label>{" "}
                </div>{" "}
              </td>{" "}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                BBQ Heaven{" "}
              </th>{" "}
              <td className="px-6 py-4"> Dallas </td>{" "}
              <td className="px-6 py-4"> Barbecue </td>{" "}
              <td className="px-6 py-4"> 4.9 </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Remove{" "}
                </a>{" "}
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
}

export default ViewRestaurant;
