import { configureStore } from '@reduxjs/toolkit';
import coinListSliceReducer from './Features/coinListSlice/coinListSlice';
import coinHistoricPriceReducer from "./Features/coinHistoricPrice/coinHistoricPrice"
import coinTrendingReducer from "./Features/coinTrending/coinTrending"

const store = configureStore({
    reducer: {
        coinList: coinListSliceReducer,
        historicPrice: coinHistoricPriceReducer,
        coinTrending:coinTrendingReducer
    }
})

export default store;
