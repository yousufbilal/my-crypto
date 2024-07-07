import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const coinGeckoInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const addCoinList = createAsyncThunk(
  'coinList/addCoinList',
  async () => {
    try {
      const response = await coinGeckoInstance.get('coins/markets?vs_currency=usd');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


// see where to place axio instance structure 


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
})

export const { logoutCoinList } = coinListSlice.actions
export default coinListSlice.reducer;
