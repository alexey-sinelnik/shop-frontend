import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/utils/helpers/axios";

export const getAllProductsThunk = createAsyncThunk(
    "products/get-all",
    async (_, { rejectWithValue }) => {
        try {
            const products = await instance.get("products/get-all-products");
            return products.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
