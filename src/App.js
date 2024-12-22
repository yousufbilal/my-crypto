import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Componants/Pages/HomePage/Home"
import { About } from "./Componants/Pages/About/About"
import { LoginPage } from "./Componants/Pages/LoginPage/LoginPage"
import FavPage from "./Componants/Pages/FavPage/FavPage"
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { app } from "./fireBaseDataBase";
import { useState, useEffect } from "react";
import SideBar from "./Componants/Molecules/SideBar/SideBar";
import Header from "./Componants/Organism/Header/Header";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { current } from "@reduxjs/toolkit";
import ProtectedRoute from "./Componants/Molecules/ProtectedRoute/ProtectedRoute";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});


function App() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [test, setTest] = useState(null)

  useEffect(() => {
    sessionStorage.clear();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      navigate("/home");
    });
    return () => unsubscribe();
  }, [auth]);

  return (

    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Box display="flex" flexGrow={1}>
        <SideBar />
        {/* Routes  */}
        <Box className="content" flexGrow={1}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/favpage" element={<FavPage />} />
            </Route>
          </Routes>
        </Box>
      </Box>
    </Box>

  );
}


export default App;