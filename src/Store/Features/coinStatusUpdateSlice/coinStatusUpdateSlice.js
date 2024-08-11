import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinGecko from "../../../https/Clients/coinGecko";

export const addCoinStatusUpdate = createAsyncThunk(
    'coinStatusUpdate/addCoinStatusUpdate',
    async (coinID) => {
        const response = await coinGecko.get(`coins/${coinID}`);
        // const response = await coinGecko.get('coins/bitcoin/market_chart?vs_currency=usd&days=1');
        return response.data;
    }
);


const coinStatusUpdateSlice = createSlice({
    name: 'coinStatusUpdate',
    initialState: {
        statusUpdate: [],
        coinStatusUpdateErrors: false,
        coinStatusUpdateStatus: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCoinStatusUpdate.pending, (state) => {
                state.coinStatusUpdateStatus = 'loading';
                state.statusUpdate = [];
                state.coinStatusUpdateErrors = false;
            })
            .addCase(addCoinStatusUpdate.fulfilled, (state, action) => {
                state.statusUpdate = action.payload;
                state.coinStatusUpdateStatus = 'succeeded';
            })
            .addCase(addCoinStatusUpdate.rejected, (state, action) => {
                state.coinStatusUpdateStatus = 'failed';
                state.coinStatusUpdateErrors = action.error.message;
            })
    },
});

export default coinStatusUpdateSlice.reducer;
