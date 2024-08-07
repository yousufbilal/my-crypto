import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { About } from "./Pages/About/About";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import FavPage from "./Pages/FavPage/FavPage";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { getDatabase, ref, onValue, off } from "firebase/database";
import app from "./fireBaseDataBase";
import { useState, useEffect } from "react";

import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [data, setData] = useState(null); // Use null initially if data is not an array

  useEffect(() => {
    const database = getDatabase(app);
    const dataRef = ref(database, "gym"); // Accessing "gym" path

    // Set up a listener to fetch data from Firebase
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      // console.log("Data snapshot:", value);

      if (value) {
        setData(value); // Set the actual value directly
      } else {
        console.log("No data found");
        setData(null); // Clear data
      }
    }, (error) => {
      console.error("Error fetching data:", error);
    });

    // Clean up the listener when component unmounts
    return () => {
      unsubscribe(); // Use the unsubscribe function returned by onValue
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="main-page">
        {/* <div>
          <h1>Data from Firebase</h1>
          <ul>
            {data !== null ? ( // Render based on data existence
              <li>{data}</li> // Directly render the data
            ) : (
              <li>No data available</li> // Fallback message
            )}
          </ul>
        </div> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favpage" element={<FavPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
