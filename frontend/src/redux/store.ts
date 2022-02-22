import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
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
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;