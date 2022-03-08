import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userId: number | null;
}

const initialState: UserState = {
  userId: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },

    deleteUserId: (state) => {
      state.userId = null;
    }
  }
});

export const { setUserId, deleteUserId } = userSlice.actions;

export default userSlice.reducer;
