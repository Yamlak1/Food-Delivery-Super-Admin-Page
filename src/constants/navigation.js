import { FaChartPie, FaExclamation } from 'react-icons/fa';
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
    icon: <FaChartPie />,
  },
  {
    key: 'view-restaurants',
    label: 'View Restaurants',
    path: '/adminDashboard/view-restaurants',
    icon: <HiOutlineCube />,
  },
  {
    key: 'about',
    label: 'About',
    path: '/adminDashboard/about',
    icon: <HiOutlineCube />,
  },
  {
    key: 'users',
    label: 'Users',
    path: '/adminDashboard/users',
    icon: <HiOutlineCube />,
  },

  {
    key: 'create-restaurant',
    label: 'Create Restaurant',
    path: '/adminDashboard/create-restaurant',
    icon: <HiOutlineCube />,
  },
  {
    key: 'restaurant-agents',
    label: 'Restaurant Agents',
    path: '/adminDashboard/restaurant-agents',
    icon: <HiOutlineCube />,
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
