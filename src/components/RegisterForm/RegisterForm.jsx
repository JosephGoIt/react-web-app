import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/operations';
import { getIsLoading } from '../../redux/auth/selectors';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('All fields are required');
      return;
    }
    try {
      await dispatch(signup({ name, email, password })).unwrap();
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formField}>
        <p className={css.formLabel}>Name</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={css.input}
        />
      </label>
      <label className={css.formField}>
        <p className={css.formLabel}>Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={css.input}
        />
      </label>
      <label className={css.formField}>
        <p className={css.formLabel}>Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={css.input}
        />
      </label>
      <button
        type="submit"
        className={css.formButton}
        disabled={isLoading}
      >
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};
