import { configureStore } from '@reduxjs/toolkit';
import coinListSliceReducer from './Features/coinListSlice/coinListSlice';
import coinIDSliceReducer from "./Features/coinIDSlice/coinIDSlice"
import coinDataTableReducer from "./Features/coinDataTableSlice/coinDataTableSlice"
import coinHistoricPriceReducer from "./Features/coinHistoricPrice/coinHistoricPrice"

const store = configureStore({
    reducer: {
        coinList: coinListSliceReducer,
        coinID: coinIDSliceReducer,
        coinDataTable: coinDataTableReducer,
        historicPrice: coinHistoricPriceReducer,
    }
})

export default store;
