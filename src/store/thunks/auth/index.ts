import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/utils/helpers/axios";

export const registerUserThunk = createAsyncThunk(
    "auth/register-user",
    async (data: any, { rejectWithValue }) => {
        try {
            const user = await instance.post("auth/login", data);
            return user.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
