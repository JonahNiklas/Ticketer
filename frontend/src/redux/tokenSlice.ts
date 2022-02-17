import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenInfo } from '../types';

export interface TokenState {
  value: TokenInfo;
}

const initialState: TokenState = {
  value: { token: null }
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value.token = action.payload;
    },

    deleteToken: (state) => {
      state.value.token = null;
    }
  }
});

export const { setToken, deleteToken } = tokenSlice.actions;

export default tokenSlice.reducer;
