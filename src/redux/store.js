import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import authReducer from './auth/authSlice';
import filtersReducer from './filtersSlice';

const persistedToken = localStorage.getItem('token');

export const store = configureStore({
  preloadedState: {
    auth: {
      token: persistedToken || null,
      isLoggedIn: !!persistedToken,
      user: JSON.parse(localStorage.getItem('user')) || null,
      isRefreshing: false,
      error: null
    }
  },
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    contactsApi.middleware,
  ],
});