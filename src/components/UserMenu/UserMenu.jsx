import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
// import style from "./UserMenu.module.css";
export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user?.email);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return isLoggedIn ? (
    <div>
      <span>{email}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : null;
};

export default UserMenu;
