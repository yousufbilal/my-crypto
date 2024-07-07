import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const coinPriceInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});


export const fetchCoinPrice = createAsyncThunk(
    "coinPrice/fetchCoinPrice",
    async () => {
        try {
            const response = await coinPriceInstance.get("simple/supported_vs_currencies");
            return response.data;
        } catch (error) {
        }
    }
);

const coinPriceSlice = createSlice({
    name: "coinPrice",
    initialState: {
        priceList: [],
        errors: false,
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCoinPrice.pending, (state) => {
            state.status = "loading";
            state.priceList = [];
        })
            .addCase(fetchCoinPrice.fulfilled, (state, action) => {
                state.priceList = action.payload;
                state.status = "idle";
            })
            .addCase(fetchCoinPrice.rejected, (state, action) => {
                state.status = "failed";
                state.errors = action.error.message;
            })
    }
})

export default coinPriceSlice.reducer