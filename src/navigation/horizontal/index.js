/* eslint-disable import/no-anonymous-default-export */
import { Mail, Home, Send } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'thirdPage',
    title: 'Third Page',
    icon: <Send size={20} />,
    navLink: '/third-page'
  }
]
