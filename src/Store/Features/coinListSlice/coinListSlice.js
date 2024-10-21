import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinGecko from "../../../https/Clients/coinGecko";
import { LocalStorageFunc } from "../../../Componants/Atoms/LocalStorageFunc";

export const addCoinList = createAsyncThunk(
  'coinList/addCoinList',
  async () => {
    try {
      const response = await coinGecko.get('coins/markets?vs_currency=usd');
      localStorage.setItem("user", JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      throw error;
    }
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
})

export const { logoutCoinList } = coinListSlice.actions
export default coinListSlice.reducer;
