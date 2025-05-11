import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import style from './SignupForm.module.css';

export const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register({ name, email, password })).unwrap();
      navigate('/contacts');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className={style.signupForm}>
  <h2 className={style.formTitle}>Register</h2>
  <form onSubmit={handleSubmit}>
    <div className={style.formGroup}>
      <label className={style.label} htmlFor="name">Name:</label>
      <input
        id="name"
        className={style.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

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

    <button className={style.signupButton} type="submit">Register</button>
    {error && <p className={style.errorMessage}>{error}</p>}
  </form>
</div>

  );
};