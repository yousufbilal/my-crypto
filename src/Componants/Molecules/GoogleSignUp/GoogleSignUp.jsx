import { app } from "../../../fireBaseDataBase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../Store/Features/counterSlice/counterSlice";

const GoogleSignUp = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handelLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch(
      setUserData({
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        uid: result.user.uid
      })
    );
  };

  return (
    <Box>
      <img
        className="btn"
        onClick={handelLogin}
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240520175106/Google_SignIn_Logo.png"
        alt="Login with Google"
      />
    </Box>
  );
};

export default GoogleSignUp;
