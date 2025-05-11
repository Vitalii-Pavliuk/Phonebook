import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import style from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(logIn({ email, password })).unwrap();
      navigate('/contacts');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={style.loginForm}>
      <h2 className={style.formTitle}>Login</h2>
      <form onSubmit={handleSubmit}>
  <div className={style.formGroup}>
    <label className={style.label} htmlFor="email">Email:</label>
    <input
      id="email"
      className={style.input}
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div className={style.formGroup}>
    <label className={style.label} htmlFor="password">Password:</label>
    <input
      id="password"
      className={style.input}
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <button className={style.loginButton} type="submit">Login</button>
  {error && <p className={style.errorMessage}>{error}</p>}
</form>

    </div>
  );
};