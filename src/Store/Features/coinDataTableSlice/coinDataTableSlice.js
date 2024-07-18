import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const coinDataTableInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});


export const fetchCoinDataTable = createAsyncThunk(
    "coinDataTable/fetchCoinDataTable",
    // async () => {
    //     try {
    //         const response = await coinDataTableInstance.get("simple/supported_vs_currencies");
    //         return response.data;
    //     } catch (error) {
    //     }
    // }
);

const coinDataTableSlice = createSlice({
    name: "coinDataTable",
    initialState: {
        priceList: [],
        errors: false,
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCoinDataTable.pending, (state) => {
            state.status = "loading";
            state.priceList = [];
        })
            .addCase(fetchCoinDataTable.fulfilled, (state, action) => {
                state.priceList = action.payload;
                state.status = "idle";
            })
            .addCase(fetchCoinDataTable.rejected, (state, action) => {
                state.status = "failed";
                state.errors = action.error.message;
            })
    }
})

export default coinDataTableSlice.reducer