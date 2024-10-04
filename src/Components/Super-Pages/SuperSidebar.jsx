import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import {
  ADMIN_SIDEBAR_LINKS,
  SUPER_ADMIN_SIDEBAR_LINKS,
} from "../../constants/navigation";

const linkClass =
  "flex items-center gap-2 font-light px-5 py-4 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-3xl font-poppins";

export default function AdminSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {" "}
      {!isSidebarOpen && (
        <div className="py-5 px-5  bg-blue-300 text-white fixed top-0 left-0 w-full flex justify-between items-center md:hidden z-50">
          <button onClick={toggleSidebar}>
            <FaBars size={24} />{" "}
          </button>{" "}
        </div>
      )}{" "}
      {/* Sidebar component */}{" "}
      <div
        className={classNames(
          "bg-neutral-900 p-3 flex flex-col text-white fixed inset-y-0 transform md:relative transition-transform duration-200",
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
          "md:w-64 w-3/4 sm:w-2/3 lg:w-96 z-20"
        )}
      >
        <div className="flex items-center gap-2 px-1 py-3">
          <Link to="/" className="text-2xl font-semibold bg-neutral-100">
            <img src={logo} alt="Logo" className="w-24" />
          </Link>{" "}
          <span className="text-neutral-100 text-lg p-6 font-poppins">
            {" "}
            FoodieStream{" "}
          </span>{" "}
        </div>{" "}
        <div className="py-8 flex flex-1 flex-col gap-0.5">
          {" "}
          {SUPER_ADMIN_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} onClick={toggleSidebar} />
          ))}{" "}
        </div>{" "}
        <div className="flex-1"> </div> <div> bottom - part </div>{" "}
      </div>{" "}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}{" "}
    </>
  );
}

function SidebarLink({ link, onClick }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      onClick={onClick}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl"> {link.icon} </span> {link.label}{" "}
    </Link>
  );
}
