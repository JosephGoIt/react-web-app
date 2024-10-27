import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://phonebook-backend-ys8p.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /signup
 * body: { name, email, password }
 */
export const signup = createAsyncThunk(
  '/api/users',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/signup', credentials);
      // After successful registration, add the token to the HTTP header
      //   setAuthHeader(res.data.token);
      // After registration, en email verification is sent to email that must be verified first
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  '/api/users',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk('api/users', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const current = createAsyncThunk(
  'api/users',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/current/me');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);