import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addCoinList = createAsyncThunk(
    "coinList/addCoinList",
    async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/asset_platforms');
        return response.data;
    }
);

const coinListSlice = createSlice({
    name: "coinList",
    initialState: {
        categories: [],
        errors: false,
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCoinList.pending, (state) => {
                state.status = "loading";
                state.categories = [];
            })
            .addCase(addCoinList.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.status = "idle";
            })
            .addCase(addCoinList.rejected, (state, action) => {
                state.status = "failed";
                state.errors = action.error.message;
            });
    }
});

export const { logoutCoinList } = coinListSlice.actions;
export default coinListSlice.reducer;
