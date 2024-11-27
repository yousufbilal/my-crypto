import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinGecko from "../../../https/Clients/coinGecko";


export const addCoinList = createAsyncThunk(
  'coinList/addCoinList',
  async () => {
    try {
      const response = await coinGecko.get('coins/markets?vs_currency=usd');
      localStorage.setItem("user", JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      throw error
    }
  }
);

const coinListSlice = createSlice({
  name: "coinList",
  initialState: {
    categories: [], //categoriesData
    errors: false, //should be unique categoriesError
    status: "idle" //categoriesLoading
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(addCoinList.pending, (state) => {
        state.categories = []; //categoriesData
        state.status = "loading";  //categoriesLoading
        //state.categoriesError = false
      })
      .addCase(addCoinList.fulfilled, (state, action) => {
        state.categories = action.payload;  //categoriesData
        state.status = "idle";
      })
      .addCase(addCoinList.rejected, (state, action) => {
        state.errors = action.error.message;
        state.status = "failed";
      })
  }
})

export const { logoutCoinList } = coinListSlice.actions
export default coinListSlice.reducer;