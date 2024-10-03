import { configureStore } from '@reduxjs/toolkit';
import coinListSliceReducer from './Features/coinListSlice/coinListSlice';
import coinHistoricPriceReducer from './Features/coinHistoricPrice/coinHistoricPrice';
import coinTrendingReducer from './Features/coinTrending/coinTrending';
import coinStatusUpdateReducer from './Features/coinStatusUpdateSlice/coinStatusUpdateSlice';
import counterReducer from './Features/counterSlice/counterSlice';

const store = configureStore({
    reducer: {
        coinList: coinListSliceReducer,
        historicPrice: coinHistoricPriceReducer,
        coinTrending: coinTrendingReducer,
        coinStatusUpdate: coinStatusUpdateReducer,
        counter:counterReducer,
    },
});

export default store;