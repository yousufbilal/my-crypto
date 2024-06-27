import { configureStore } from '@reduxjs/toolkit';
import coinListSliceReducer from './Features/coinListSlice/coinListSlice';

const store = configureStore({
    reducer: {
        coinList: coinListSliceReducer,
    }
})

export default store;
