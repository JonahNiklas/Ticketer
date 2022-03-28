import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TokenState {
  token: string | null;
}

const initialState: TokenState = {
  token: null
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    deleteToken: (state) => {
      state.token = null;
    }
  }
});

export const { setToken, deleteToken } = tokenSlice.actions;

export default tokenSlice.reducer;
