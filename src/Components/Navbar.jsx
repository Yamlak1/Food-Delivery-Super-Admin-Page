// import React, { useState } from 'react';
// import { FaBell, FaCommentDots, FaCog } from 'react-icons/fa'; // Import icons
// import { MdSearch } from 'react-icons/md'; // Import search icon
// import Cookies from 'js-cookie';

// function Navbar() {
//   // State for managing the toggle switch
//   const [isToggled, setIsToggled] = useState(false);
//   const image = Cookies.get('image');
//   const userType = Cookies.get('user_type');
//   const fullName = Cookies.get('full_name');

//   const imageUrl = image ? `${image}` : 'path-to-default-image';

//   // Function to handle the toggle
//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <div className="bg-white text-black p-4 fixed shadow-md flex justify-between items-center transition-all duration-300 h-24 w-full z-50">
//       {/* Search Bar */}
//       <div className="flex pl-14 text-2xl font-light items-center ">
//         DASHBOARD
//       </div>

//       {/* Toggle and Notifications
//       <div className="flex items-center ">
//         <div className="flex items-center">
//           <div className="relative flex items-center mr-10">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={isToggled}
//               onChange={handleToggle}
//             />
//             <div
//               className={`block w-12 h-6 rounded-full ${
//                 isToggled ? 'bg-white' : 'bg-gray-600'
//               }`}></div>
//             <div
//               className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
//                 isToggled ? 'translate-x-6' : ''
//               }`}></div>
//           </div>express
//         </div> */}

//       {/* Notifications
//         <div className="flex items-center mr-20">
//           <div className="relative">
//             <FaBell className="text-gray-600 mr-10" size={25} />
//             <span className="absolute top-0 right-0 mr-10 bg-pink-500 rounded-full w-2.5 h-2.5"></span>
//           </div>
//           <div className="relative">
//             <FaCommentDots className="text-gray-600 " size={25} />
//             <span className="absolute top-0 right-0 bg-pink-500 rounded-full w-2.5 h-2.5"></span>
//           </div>
//         </div> */}

//       {/* User Profile */}
//       <div className="flex items-center mr-[400px]">
//         <img src={imageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
//         <div className="text-left ml-5">
//           <p className="text-sm font-medium">{fullName}</p>
//           <p className="text-xs text-gray-500">{userType}</p>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { FaBell, FaCommentDots, FaCog } from 'react-icons/fa'; // Import icons
import { MdSearch } from 'react-icons/md'; // Import search icon
import Cookies from 'js-cookie';

function Navbar() {
  // State for managing the toggle switch
  const [isToggled, setIsToggled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const image = Cookies.get('image');
  const userType = Cookies.get('user_type');
  const fullName = Cookies.get('full_name');

  const imageUrl = image ? `${image}` : 'path-to-default-image';

  // Function to handle the toggle
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout action, like removing cookies or redirecting to login page
    Cookies.remove('image');
    Cookies.remove('user_type');
    Cookies.remove('full_name');
    window.location.href = '/login'; // Redirect to login page after logout
  };

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white text-black p-4 fixed shadow-md flex justify-between items-center transition-all duration-300 h-24 w-full z-50">
      {/* Search Bar */}
      <div className="flex pl-14 text-2xl font-light items-center">
        DASHBOARD
      </div>

      {/* User Profile with Dropdown */}
      <div className="relative flex items-center mr-[500px]">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        <div className="text-left ml-5">
          <p className="text-sm font-medium">{fullName}</p>
          <p className="text-xs text-gray-500">{userType}</p>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-14 w-48 bg-white border rounded-lg shadow-lg">
            <ul className="py-1">
              <li
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
