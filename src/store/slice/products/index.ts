import { createSlice } from "@reduxjs/toolkit";
import { getAllProductsThunk } from "@/store/thunks/products";
import { ProductsState } from "@/common/types/products";

const initialState: ProductsState = {
    products: []
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    }
});

export default productsSlice.reducer;
