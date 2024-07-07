import { configureStore } from '@reduxjs/toolkit';
import coinListSliceReducer from './Features/coinListSlice/coinListSlice';
import coinIDSliceReducer from "./Features/coinIDSlice/coinIDSlice"
import coinPriceReducer from "./Features/coinPriceSlice/coinPriceSlice"

const store = configureStore({
    reducer: {
        coinList: coinListSliceReducer,
        coinID:coinIDSliceReducer,
        coinPrice:coinPriceReducer,
    }
})

export default store;
