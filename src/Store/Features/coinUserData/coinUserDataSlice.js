import { createSlice } from "@reduxjs/toolkit";

const coinUserDataSlice = createSlice({
    name: "coinUserData",
    initialState:{
        userUpdate:[],
        userStatusError:false,
        userUpdateStatus:"idle"
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addCoinStatusUpdate.pending, (state) => {
            state.coinStatusUpdateStatus = 'loading';
            state.statusUpdate = [];
            state.coinStatusUpdateErrors = false;
        })
        .addCase(addCoinStatusUpdate.fulfilled, (state, action) => {
            state.statusUpdate = action.payload;
            state.coinStatusUpdateStatus = 'succeeded';
        })
        .addCase(addCoinStatusUpdate.rejected, (state, action) => {
            state.coinStatusUpdateStatus = 'failed';
            state.coinStatusUpdateErrors = action.error.message;
        })

    }
})