import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        clearUserData: (state) => {
            state.userData = null;
        },

    }
})


//see in feature trending

export const { setUserData, clearUserData } = counterSlice.actions

export default counterSlice.reducer
