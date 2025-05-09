import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filtersReducer from './filtersSlice';
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});


