import {
  FaBicycle,
  FaChartPie,
  FaExclamation,
  FaFileContract,
  FaHamburger,
  FaInfo,
  FaRegUser,
  FaTh,
  FaUserTie,
} from 'react-icons/fa';
import {
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineAnnotation,
} from 'react-icons/hi';

export const ADMIN_SIDEBAR_LINKS = [
  {
    key: 'statistics',
    label: 'Dashboard',
    path: '/adminDashboard/statistics',
    icon: <FaTh />,
  },
  {
    key: 'create-restaurant',
    label: 'Create Restaurant',
    path: '/adminDashboard/create-restaurant',
    icon: <FaFileContract />,
  },
  {
    key: 'view-restaurants',
    label: 'View Restaurants',
    path: '/adminDashboard/view-restaurants',
    icon: <FaHamburger />,
  },
  {
    key: 'restaurant-agents',
    label: 'Restaurant Agents',
    path: '/adminDashboard/restaurant-agents',
    icon: <FaUserTie />,
  },
  {
    key: 'createDriver',
    label: 'Create Driver',
    path: '/adminDashboard/createDriver',
    icon: <FaBicycle />,
  },
  {
    key: 'users',
    label: 'Users',
    path: '/adminDashboard/users',
    icon: <FaRegUser />,
  },
  {
    key: 'about',
    label: 'About',
    path: '/adminDashboard/about',
    icon: <FaInfo />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/adminDashboard/settings',
    icon: <HiOutlineCube />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/adminDashboard/support',
    icon: <HiOutlineCube />,
  },
];

export const SUPER_ADMIN_SIDEBAR_LINKS = [
  {
    key: 'statistics',
    label: 'Dashboard',
    path: '/superDashboard/statistics',
    icon: <FaChartPie />,
  },
  // {
  //   key: 'about',
  //   label: 'About',
  //   path: '/superDashboard/about',
  //   icon: <HiOutlineCube />,
  // },
  {
    key: 'employee-info',
    label: 'Employee Information',
    path: '/superDashboard/emp-info',
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: 'Reports',
    label: 'Reports',
    path: '/superDashboard/reports',
    icon: <FaExclamation />,
  },
  {
    key: 'create-admin',
    label: 'Create Admin',
    path: '/superDashboard/create-admin',
    icon: <HiOutlineAnnotation />,
  },
  {
    key: 'change-password-admin',
    label: 'Change Admin Password',
    path: '/superDashboard/change-password-admin',
    icon: <HiOutlineAnnotation />,
  },
  {
    key: 'delete-admin',
    label: 'Delete Admin',
    path: '/superDashboard/delete-admin',
    icon: <HiOutlineAnnotation />,
  },
];
