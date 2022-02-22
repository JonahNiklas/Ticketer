import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "../types";

export interface UserState {
    value: UserInfo;
}

const initialState: UserState = {
    value: {userId: null}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<number>) => {
            state.value.userId = action.payload;
        },

        deleteUserId: (state) => {
            state.value.userId = null;
        }
    }
});

export const { setUserId, deleteUserId } = userSlice.actions;

export default userSlice.reducer;