import React, { useState } from 'react';
import { FaBell, FaCommentDots, FaCog } from 'react-icons/fa'; // Import icons
import { MdSearch } from 'react-icons/md'; // Import search icon
import Cookies from 'js-cookie';

function Navbar() {
  // State for managing the toggle switch
  const [isToggled, setIsToggled] = useState(false);
  const image = Cookies.get('image');
  const userType = Cookies.get('user_type');
  const fullName = Cookies.get('full_name');

  const imageUrl = image ? `${image}` : 'path-to-default-image';

  // Function to handle the toggle
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="bg-white text-black p-4 fixed shadow-md flex justify-between items-center transition-all duration-300 h-24 w-full z-50">
      {/* Search Bar */}
      <div className="flex pl-14 text-2xl font-light items-center ">
        DASHBOARD
      </div>

      {/* Toggle and Notifications */}
      <div className="flex items-center ">
        <div className="flex items-center">
          <div className="relative flex items-center mr-10">
            <input
              type="checkbox"
              className="sr-only"
              checked={isToggled}
              onChange={handleToggle}
            />
            <div
              className={`block w-12 h-6 rounded-full ${
                isToggled ? 'bg-white' : 'bg-gray-600'
              }`}></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                isToggled ? 'translate-x-6' : ''
              }`}></div>
          </div>
        </div>

        {/* Notifications */}
        <div className="flex items-center mr-20">
          <div className="relative">
            <FaBell className="text-gray-600 mr-10" size={25} />
            <span className="absolute top-0 right-0 mr-10 bg-pink-500 rounded-full w-2.5 h-2.5"></span>
          </div>
          <div className="relative">
            <FaCommentDots className="text-gray-600 " size={25} />
            <span className="absolute top-0 right-0 bg-pink-500 rounded-full w-2.5 h-2.5"></span>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center mr-[400px]">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left ml-5">
            <p className="text-sm font-medium">{fullName}</p>
            <p className="text-xs text-gray-500">{userType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
