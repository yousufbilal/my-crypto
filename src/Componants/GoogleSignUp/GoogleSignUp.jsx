import { app } from "../../fireBaseDataBase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { setUserData } from "../../Store/Features/counterSlice/counterSlice";

const GoogleSignUp = () => {
  //const [user, setUser] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handelLogin = async () => {
    try {
      let result = await signInWithPopup(auth, provider);

      console.log(result);
      dispatch(
        setUserData({
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          uid: result.user.uid
        })
      );
      //   setUser(result.user);
      navigate("/home", { state: { usernav: result.user.displayName } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <img
        className="btn"
        onClick={handelLogin}
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240520175106/Google_SignIn_Logo.png"
      />
    </Box>
  );
};

export default GoogleSignUp;
