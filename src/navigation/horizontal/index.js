/* eslint-disable import/no-anonymous-default-export */
import { Shield, Home, Box } from "react-feather";

export default [
  {
    id: "home",
    title: "Trang chủ",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "challenges",
    title: "Thử thách",
    icon: <Box size={20} />,
    navLink: "/challenges",
  },
  // {
  //   id: 'rank-board',
  //   title: 'Xếp hạng',
  //   icon: <Shield size={20} />,
  //   navLink: '/rank-board'
  // }
];
