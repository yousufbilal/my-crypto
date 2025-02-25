// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const postTodoItems = async () => {
//     try {
//         const response = await axios.post('http://localhost:3000/api/users', {
//             name: 'son goku Doe',
//             email: 'sonGoku@dbz.com',
//         });
//         console.log('Response:', response.data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// };


// const mongodbSlice = createSlice({
//     name: "mongodbDataBase",
//     initialState: {
//         mongodbLoading: false,
//         mongodbData: {},
//         mongodbError: false,
//         mongodbErrorMessage: ""
//     },
//     reducers: {
//         mongodbClear: (state) => {
//             state.mongodbLoading = null
//             state.mongodbData = null
//             state.mongodbError = null
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(postTodoItems.pending, (state) => {
//             state.mongodbLoading = true
//             state.mongodbData = {}
//             state.mongodbError = false
//         })
//             .addCase(postTodoItems.fulfilled, (state, action) => {
//                 state.mongodbData = action.payload
//                 state.mongodbLoading = false
//                 state.mongodbError = false
//             })

//             .addCase(postTodoItems.rejected, (state, action) => {
//                 state.mongodbData = {}
//                 state.mongodbLoading = false
//                 state.mongodbError = true
                
//             })


//     }
// })