// ** React Imports
// ** Custom Components
import Avatar from '@components/avatar'
// ** Default Avatar Image
// import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import defaultAvatar from '@src/assets/images/avatars/1-small.png'
import { handleLogout } from '@store/actions/auth'
// ** Utils
import { isUserLoggedIn } from '@utils'
import { useEffect, useState } from 'react'
import { Box, Clipboard, Power, User } from 'react-feather'
// ** Store & Actions
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
// ** Third Party Components
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

const UserDropdown = () => {
  const isAdmin = JSON.parse(window.localStorage.getItem("top-code"))?.isAdmin || false;
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  // ** Logout out
  const history = useHistory();
  // const handleLogout = () => {
  //   window.localStorage.clear();
  //   history.push("/login");
  // }

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{(userData && userData['username']) || 'Hoang Tu'}</span>
          <span className='user-status'>{(userData && userData.role) || 'Admin'}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu right style={{ width: 220 }}>
        {isAdmin && (
          <>
            <DropdownItem tag={Link} to='/admin-system-challenges'>
              <Clipboard size={14} className='mr-75' />
              <span className='align-middle'>Quản lý Challenges</span>
            </DropdownItem>
            <DropdownItem tag={Link} to='/admin-system-users'>
              <User size={14} className='mr-75' />
              <span className='align-middle'>Quản lý Users</span>
            </DropdownItem>
          </>
        )}
        <DropdownItem tag={Link} to='/my-challenges'>
          <Box size={14} className='mr-75' />
          <span className='align-middle'>Thử thách của tôi</span>
        </DropdownItem>
        {/* <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Quản lý thử thách</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#' onClick={e => e.preventDefault()}>
          <MessageSquare size={14} className='mr-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem> */}
        <DropdownItem tag={Link} to='/login' onClick={handleLogout}>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
