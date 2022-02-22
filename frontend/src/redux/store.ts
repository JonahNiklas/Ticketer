import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tokenSliceReducer from './tokenSlice';
import userSliceReducer from './userSlice';

export const store = configureStore({
  reducer: {
    token: tokenSliceReducer,
    user: userSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>();
