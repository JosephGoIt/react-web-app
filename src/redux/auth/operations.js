import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://phonebook-backend-ys8p.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

// Utility to schedule token refresh

let refreshTimeout;
const scheduleTokenRefresh = (token, dispatch) => {
  if (refreshTimeout) clearTimeout(refreshTimeout);

  try {
    const { exp } = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    const timeUntilExpiry = exp - currentTime;

    if (timeUntilExpiry <= 0) {
      // Token expired, log out the user
      dispatch(logout());
      return;
    }

    // Schedule refresh 1 minute before expiry
    const refreshTime = Math.max(timeUntilExpiry - 60, 0) * 1000;

    refreshTimeout = setTimeout(() => {
      dispatch(refreshUser());
    }, refreshTime);
  } catch (error) {
    console.error('Error decoding JWT', error);
    dispatch(logout());
  }
};


/*
 * POST @ /signup
 * body: { name, email, password }
 */
export const signup = createAsyncThunk(
  '/api/users',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      toast.success(
        'Account created! Verification has been sent to your email. Please verify your email.'
      );
      // After registration, en email verification is sent to email that must be verified first
      return res.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue({status, message});
    }
  }
);

/*
 * POST @ /login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  'api/users',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/login', credentials);
      const { user, accessToken, refreshToken } = res.data;
      // After successful login, add the token to the HTTP header
      // setAuthHeader(res.data.token);
      setAuthHeader(accessToken);
      scheduleTokenRefresh(accessToken, thunkAPI.dispatch);
      return {user, token: accessToken, refreshToken};
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue({status, message});
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk('/api/users/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }
  try {
    setAuthHeader(token);
    await axios.get('/api/users//logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
    clearTimeout(refreshTimeout);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;

    if (!refreshToken) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('No refresh token foundr');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      // setAuthHeader(persistedToken);
      const res = await axios.get('/auth/refresh', {refreshToken});
      const {
        user,
        accessToken,
        refreshToken: newRefreshToken,
      } = res.data;
      setAuthHeader(accessToken);
      scheduleTokenRefresh(accessToken, thunkAPI.dispatch);
      return {user, token: accessToken, refreshToken: newRefreshToken};
    } catch (error) {
      // Handle refresh token expiration
      if (error.response?.status === 401) {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Resend Verify Email
export const resendVerifyEmail = createAsyncThunk(
  'auth/resendVerifyEmail',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('/auth/verify', { email });

      toast.success('Verification email sent successfully.');

      return response.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      if (status === 404) {
        toast.error('Email is not registered.');
      } else if (status === 400 && message === 'Email is already verified') {
        toast.info('Email was already verified.');
      } else if (status === 400) {
        toast.warning('Please enter valid email address');
      }

      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);

// Current User
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/auth/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);