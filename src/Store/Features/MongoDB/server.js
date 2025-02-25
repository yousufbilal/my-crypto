import React, { useEffect, useState } from 'react';
import axios from 'axios';


//https://serversidecodemongo-1.onrender.com here its from render 
export const postTodoItems = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/users', {
            name: 'yousuf aldo',
            email: 'yousufAdlo@kingShit.com',
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.log('Error:', error);
    }
};

const mongoDbClient = axios.create({
    baseURL: 'https://serversidecodemongo-1.onrender.com:3000/api', // Change to your API URL
    // timeout: 200000, // Timeout in milliseconds (30 seconds)
  });

export const getTodoItems = async () => {
    try {
        // Sending GET request to fetch data from API

        const response = await mongoDbClient.get('/users')

        console.log("success")

        // Handling the successful response
        // console.log('Response:', response.data);
        console.log('Response:', response);
        return response.data; // You can return the data if you need to use it elsewhere
    } catch (error) {
        // Handling any errors
        console.error('Error:', error);
        return null; // You can return null or throw error depending on how you want to handle it in your app
    }
};

//end point 

