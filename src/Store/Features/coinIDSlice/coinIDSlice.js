import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoinIDs = createAsyncThunk(
  "coinID/fetchCoinIDs",
  async () => {
    try {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/list");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const coinIDSlice = createSlice({
  name: "coinID",
  initialState: {
    IDs: [], 
    errors: false,
    status: "idle"
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinIDs.pending, (state) => {
        state.fetchCoinIDsLoading = true;
        state.fetchCoinIDsError = false;
        state.fetchCoinIDsErrorMessage = ""
        state.IDs = [];
      })
      .addCase(fetchCoinIDs.fulfilled, (state, action) => {
        state.fetchCoinIDsLoading = false;
        state.fetchCoinIDsError = false;
        state.IDs = action.payload;
        state.fetchCoinIDsErrorMessage = ""
      })
      .addCase(fetchCoinIDs.rejected, (state, action) => {
        state.fetchCoinIDsLoading = false;
        state.fetchCoinIDsError = true;
        state.fetchCoinIDsErrorMessage = action.error.message;
      });
  }
});


export default coinIDSlice.reducer;

