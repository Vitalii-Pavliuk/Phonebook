import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authSlice';
import style from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return isLoggedIn ? (
    <div className={style.userMenu}>
      <span className={style.userEmail}>{email}</span>
      <button className={style.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  ) : null;
};