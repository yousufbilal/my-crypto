
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favCollectedCoins: []
};


const favCoinSLice = createSlice({
  name: 'favCoin',
  initialState,
  reducers: {}
},
);


export default favCoinSLice.reducer;
