import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk } from "@/store/thunks/auth";
import { AuthStateType, UserDataType } from "@/common/types/store/auth";

const initialState: AuthStateType = {
    user: {} as UserDataType
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
});

export default authSlice.reducer;
