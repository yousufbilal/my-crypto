import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinGecko from "../../../https/Clients/coinGecko";


export const addCoinList = createAsyncThunk(
  'coinList/addCoinList',
  async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await coinGecko.get('coins/markets?vs_currency=usd');
      // localStorage.setItem("user", JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      throw error
    }
  }
);

const coinListSlice = createSlice({
  name: "coinList",
  initialState: {
    coinCategoriesLoading: false, //categoriesLoading
    coinCategoriesData: {}, //categoriesData
    coinCategoriesError: false, //should be unique categoriesError
    coinErrorMessage: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCoinList.pending, (state) => {
        state.coinCategoriesLoading = true;  //categoriesLoading
        state.coinCategoriesData = {}; //categoriesData
        state.coinCategoriesError = false
        //state.categoriesError = false
      })
      .addCase(addCoinList.fulfilled, (state, action) => {
        state.coinCategoriesData = action.payload;  //categoriesData
        state.coinCategoriesLoading = false;
        state.coinCategoriesError = false

      })
      .addCase(addCoinList.rejected, (state, action) => {
        state.coinCategoriesLoading = false;
        state.coinCategoriesError = true
        state.coinErrorMessage = action.error.message


      })
  }
})

export const { logoutCoinList } = coinListSlice.actions
export default coinListSlice.reducer;