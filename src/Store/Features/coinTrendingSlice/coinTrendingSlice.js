import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinGecko from "../../../https/Clients/coinGecko";

//keep this
export const addCoinTrending = createAsyncThunk(
    'coinTrending/addCoinTrending',
    async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve,1000));
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
        trendingLoading: false,
        trendingData: {},
        trendingError: false,
        trendingErrorMessage: "",
    },
    reducers: {
        trendingCoinsClear: (state) => {
            state.trendingData = null
            state.trendingError = null
            state.trendingLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCoinTrending.pending, (state) => {
                state.trendingLoading = true
                state.trendingData = {}
                state.trendingError = false
            })
            .addCase(addCoinTrending.fulfilled, (state, action) => {
                state.trendingData = action.payload;
                state.trendingLoading = false
                state.trendingError = false
            })
            .addCase(addCoinTrending.rejected, (state, action) => {
                state.trendingData = {}
                state.trendingLoading = false;
                state.trendingError = true
                state.trendingErrorMessage = action.error.message;
            });
    }
});

export const { trendingCoinsClear } = coinTrendingSlice.actions //look into this 
export default coinTrendingSlice.reducer;