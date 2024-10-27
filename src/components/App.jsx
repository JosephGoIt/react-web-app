import { useEffect, lazy, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { logout, refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
// import { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token, isLoggedIn } = useAuth();
  const refreshInterval = useRef(null);

    // Effect to check and decode token
    useEffect(() => {
      if (token) {
        try {
          const { exp } = jwtDecode(token); // Decode token to get expiry
          const currentTime = Date.now() / 1000;
  
          if (exp < currentTime) {
            dispatch(logout()); // Force logout if the token is expired
          }
        } catch (error) {
          console.error('Error decoding token:', error);
          dispatch(logout());
        }
      }
    }, [token, dispatch]);

    // Effect to refresh user profile and diary entries
  useEffect(() => {
    if (isLoggedIn) {
      // dispatch(fetchProfile());
      // dispatch(fetchDiaryEntries(selectedDate));

      refreshInterval.current = setInterval(() => {
        dispatch(refreshUser());
      }, 30 * 60 * 1000); // Refresh every 30 minutes

      return () => {
        if (refreshInterval.current) {
          clearInterval(refreshInterval.current);
        }
      };
    } else {
      if (refreshInterval.current) {
        clearInterval(refreshInterval.current);
      }
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};