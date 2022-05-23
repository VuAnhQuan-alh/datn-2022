// ** React Imports
import React from "react";
// ** Custom Components
import Avatar from "@components/avatar";
import { Box, Clipboard, Power, User } from "react-feather";
// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// ** Third Party Components
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { handleLogout } from "../../../../redux/actions/user";

const UserDropdown = () => {
  // ** Store Vars
  const { data } = useSelector((store) => store.user_reducers);
  const dispatch = useDispatch();

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">
            {data?.name || "Người dùng"}
          </span>
          <span className="user-status">{data?.is_admin ? "Admin" : ""}</span>
        </div>
        <Avatar
          img="https://joeschmoe.io/api/v1/random"
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu right style={{ width: 220 }}>
        {data?.is_admin && (
          <>
            <DropdownItem tag={Link} to="/admin-system-challenges">
              <Clipboard size={14} className="mr-75" />
              <span className="align-middle">Quản lý Challenges</span>
            </DropdownItem>
            <DropdownItem tag={Link} to="/admin-system-users">
              <User size={14} className="mr-75" />
              <span className="align-middle">Quản lý Users</span>
            </DropdownItem>
          </>
        )}
        {data?.name && (
          <>
            <DropdownItem tag={Link} to="/my-challenges">
              <Box size={14} className="mr-75" />
              <span className="align-middle">Thử thách của tôi</span>
            </DropdownItem>
            <DropdownItem
              tag={Link}
              to="/home"
              onClick={() => {
                dispatch(handleLogout());
                console.log("logout");
              }}
            >
              <Power size={14} className="mr-75" />
              <span className="align-middle">Logout</span>
            </DropdownItem>
          </>
        )}
        {!data?.name && (
          <DropdownItem tag={Link} to="/login">
            <Power size={14} className="mr-75" />
            <span className="align-middle">Sign In</span>
          </DropdownItem>
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
