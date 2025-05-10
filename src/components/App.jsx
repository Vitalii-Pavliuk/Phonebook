import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/authSlice';
import { ContactsPage } from './pages/ContactsPage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { UserMenu } from './UserMenu/UserMenu';
import style from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={style.loader}>Loading...</div>
  ) : (
    <BrowserRouter>
      <nav className={style.nav}>
        {!isLoggedIn ? (
          <>
            <NavLink to="/register" className={style.link}>Register</NavLink>
            <NavLink to="/login" className={style.link}>Login</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/contacts" className={style.link}>Contacts</NavLink>
            <UserMenu />
          </>
        )}
      </nav>
      
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={
          isLoggedIn ? <ContactsPage /> : <LoginPage />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;