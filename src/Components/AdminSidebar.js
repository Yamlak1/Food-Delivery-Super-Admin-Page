import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSignOutAlt,
  FaAddressCard,
  FaHamburger,
  FaChartPie,
  FaBug,
  FaCaretDown,
  FaBars,
  FaUserFriends,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function AdminSidebar({ isSidebarOpen, toggleSidebar }) {
  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(false);

  const toggleEmployeeDropdown = () => {
    setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transform lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out z-50 h-screen`}
    >
      <div className="bg-[#651823] lg:flex lg:flex-col lg:w-64 h-screen">
        <div className="flex items-center justify-between lg:justify-center px-4 py-5 bg-[#d9d9d9] text-white">
          <Link to="/" className="text-2xl font-semibold">
            <img src={logo} alt="Logo" className="h-32 w-32" />
          </Link>{" "}
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FaBars />
          </button>{" "}
        </div>{" "}
        <div className="flex flex-col flex-1 h-0 pt-5 overflow-y-auto">
          <nav className="space-y-1">
            <Link
              to="/view-statistics"
              className="group flex items-center px-4 py-2 text-lg font-medium text-white hover:bg-gray-200"
            >
              <FaChartPie className="mr-4 h-5 w-5 text-white group-hover:text-gray-500" />
              Dashboard{" "}
            </Link>{" "}
            <Link
              to="/about"
              className="group flex items-center px-4 py-2 text-lg font-medium text-white hover:bg-gray-200"
            >
              <FaAddressCard className="mr-4 h-5 w-5 text-white group-hover:text-gray-500" />
              About{" "}
            </Link>{" "}
            <Link
              to="/view-restaurants"
              className="group flex items-center px-4 py-2 text-lg font-medium text-white hover:bg-gray-200"
            >
              <FaHamburger className="mr-4 h-5 w-5 text-white group-hover:text-gray-500" />
              Restaurants{" "}
            </Link>{" "}
            <div>
              <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                Data{" "}
              </p>{" "}
              <Link
                to="/user-report"
                className="group flex items-center px-4 py-2 text-lg font-medium text-white hover:bg-gray-200"
              >
                <FaBug className="mr-4 h-5 w-5 text-white group-hover:text-gray-500" />
                User Reports{" "}
              </Link>{" "}
            </div>{" "}
            <div>
              <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                Contact{" "}
              </p>{" "}
              <Link
                to="/agents"
                className="group flex items-center px-4 py-2 text-lg font-medium text-white hover:bg-gray-200"
              >
                <FaAddressCard className="mr-4 h-5 w-5 text-white group-hover:text-gray-500" />
                Restaurant Agents{" "}
              </Link>{" "}
              <Link
                to="/users"
                className="group flex items-center px-4 py-2 text-lg font-medium text-white hover:bg-gray-200"
              >
                <FaHamburger className="mr-4 h-5 w-5 text-white group-hover:text-gray-500" />
                Users{" "}
              </Link>{" "}
            </div>{" "}
          </nav>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
