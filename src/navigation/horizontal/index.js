/* eslint-disable import/no-anonymous-default-export */
import { Mail, Home, Box } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Trang chủ',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'thirdPage',
    title: 'Thử thách',
    icon: <Box size={20} />,
    navLink: '/challenges'
  }
]
