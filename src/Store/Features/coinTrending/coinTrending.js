import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinGecko from "../../../https/Clients/coinGecko";

export const addCoinTrending = createAsyncThunk(
    'coinTrending/addCoinTrending',
    async () => {
        try {
            const response = await coinGecko.get('search/trending');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)


const coinTrendingSlice = createSlice({
    name: 'coinTrending',
    initialState: {
        trending: [],
        coinTrendingErrors: false,
        coinTrendingStatus: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCoinTrending.pending, (state) => {
                state.coinTrendingStatus = "loading";
                state.trending = [];
            })
            .addCase(addCoinTrending.fulfilled, (state, action) => {
                state.trending = action.payload;
                state.coinTrendingStatus = "idle";
            })
            .addCase(addCoinTrending.rejected, (state, action) => {
                state.coinTrendingStatus = "failed";
                state.coinTrendingErrors = action.error.message;
            });
    }
});


export default coinTrendingSlice.reducer;
