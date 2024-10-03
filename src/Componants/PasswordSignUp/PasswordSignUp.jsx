import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const PasswordSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    } catch (err) {
      const errorCode = err.code;

      setError(true);

      switch (errorCode) {
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setErrorMessage(
            "This email address is disabled by the administrator."
          );
          break;
        case "auth/user-not-found":
          setErrorMessage("This email address is not registered.");
          break;
        case "auth/wrong-password":
          setErrorMessage(
            "The password is invalid or the user does not have a password."
          );
          break;
        case "auth/invalid-credential":
          setErrorMessage(
            "The credentials provided are invalid. Please check your email and password."
          );
          break;
        default:
          setErrorMessage("An unexpected error occurred. Please try again.");
          break;
      }
    }
  };


  return (
    <div className="signinContainer">
      <div className="signinContainer__box">
        <div className="signinContainer__box__inner">
          <h1>Sign In</h1>
          <form className="signinContainer__box__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit">Sign In</button>
            {error && <p>{errorMessage}</p>}
          </form>

          <div className="signinContainer__box__signup">
            <p>
              Don't have an account? <Link to="/home">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSignIn;
