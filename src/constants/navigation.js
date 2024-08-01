import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const ADMIN_SIDEBAR_LINKS = [
  {
    key: "view-restaurants",
    label: "View Restaurants",
    path: "/adminDashboard/view-restaurants",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "about",
    label: "About",
    path: "/adminDashboard/about",
    icon: <HiOutlineCube />,
  },
  //   {
  //     key: "orders",
  //     label: "Orders",
  //     path: "/orders",
  //     icon: <HiOutlineShoppingCart />,
  //   },
  {
    key: "users",
    label: "Users",
    path: "/adminDashboard/users",
    icon: <HiOutlineUsers />,
  },
  {
    key: "user-report",
    label: "User Reports",
    path: "/adminDashboard/user-report",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "restaurant-agents",
    label: "Restaurant Agents",
    path: "/adminDashboard/restaurant-agents",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/adminDashboard/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/adminDashboard/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
