import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/authSlice';
import './Auth.css'; 

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.auth.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleLogin = () => {
    const userData = { name: 'John Doe', email: 'john.doe@example.com' };
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>{isAuthenticated ? `Welcome, ${user.name}` : 'Please log in'}</h1>
      {isAuthenticated ? (
        <button onClick={handleLogout} className={darkMode ? 'dark-button' : ''}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} className={darkMode ? 'dark-button' : ''}>
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;


