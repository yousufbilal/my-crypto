import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import coinGecko from '../../../https/Clients/coinGecko';

export const fetchCoinHistoricPrice = createAsyncThunk(
  'historicPrice/fetchCoinHistoricPrice',
  async (coinId, { rejectWithValue }) => {
    try {
      const response = await coinGecko.get(`/coins/${coinId}/market_chart?vs_currency=usd&days=7`);
      localStorage.setItem("userPrice", JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const coinHistoricSlice = createSlice({
  name: 'historicPrice',
  initialState: {
    coinHistoricPrice: [],
    historicError: false,
    historicStatus: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinHistoricPrice.pending, (state) => {
        state.historicStatus = 'loading';
        state.coinHistoricPrice = [];
        state.historicError = false;
      })
      .addCase(fetchCoinHistoricPrice.fulfilled, (state, action) => {
        state.coinHistoricPrice = action.payload;
        state.historicStatus = 'idle';
      })
      .addCase(fetchCoinHistoricPrice.rejected, (state, action) => {
        state.historicStatus = 'failed';
        state.historicError = action.error.message;
      });
  },
});

export default coinHistoricSlice.reducer;
