// Sidebar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaSignOutAlt,
  FaAddressCard,
  FaHamburger,
  FaChartPie,
  FaBug,
  FaCaretDown,
  FaBars,
} from "react-icons/fa";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

  const toggleAdminDropdown = () => {
    setIsAdminDropdownOpen(!isAdminDropdownOpen);
  };

  return (
    <div>
      <button
        className="lg:hidden bg-[#652023] text-white p-4 fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>{" "}
      <div
        className={`fixed top-0 left-0 w-64 md:w-70 lg:w-80 h-full bg-[#652023] flex flex-col justify-between p-5 text-[#D9D9D9] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="text-center mb-5 pt-8">
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="rounded-full mx-auto bg-[#D9D9D9] w-36 h-36 mt-7"
          />
          <button
            className="bg-[#D9D9D9] text-black border-none p-3 cursor-pointer flex items-center justify-center w-full hover:bg-gray-200 mt-20"
            onClick={toggleAdminDropdown}
          >
            <FaAddressCard className="mr-2" /> Admin Management{" "}
            <FaCaretDown className="ml-5" />
          </button>{" "}
          {isAdminDropdownOpen && (
            <div className="bg-[#D9D9D9] text-black mt-2 rounded-md shadow-lg">
              <Link
                to="/create-admin"
                className="block p-3 w-full text-left hover:bg-gray-100"
              >
                Create Administrator{" "}
              </Link>{" "}
              <Link
                to="/delete-admin"
                className="block p-3 w-full text-left hover:bg-gray-100"
              >
                Delete Administrator{" "}
              </Link>{" "}
              <Link
                to="/change-password-admin"
                className="block p-3 w-full text-left hover:bg-gray-100"
              >
                Change Password for Administrator{" "}
              </Link>{" "}
            </div>
          )}{" "}
          <Link
            to="/view-restaurants"
            className="bg-[#D9D9D9] text-black border-none p-3 cursor-pointer flex items-center justify-center w-full hover:bg-gray-200 mt-14"
          >
            <FaHamburger className="mr-2" /> View Restaurants{" "}
          </Link>{" "}
          <Link
            to="/view-statistics"
            className="bg-[#D9D9D9] text-black border-none p-3 cursor-pointer flex items-center justify-center w-full hover:bg-gray-200 mt-14"
          >
            <FaChartPie className="mr-2" /> View Statistics{" "}
          </Link>{" "}
          <Link
            to="/user-reports"
            className="bg-[#D9D9D9] text-black border-none p-3 cursor-pointer flex items-center justify-center w-full hover:bg-gray-200 mt-14"
          >
            <FaBug className="mr-2" /> User Reports{" "}
          </Link>{" "}
        </div>{" "}
        <div className="text-center">
          <button className="bg-[#D9D9D9] text-black border-none p-3 cursor-pointer flex items-center justify-center w-full hover:bg-gray-200">
            <FaSignOutAlt className="mr-2" /> Logout{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
