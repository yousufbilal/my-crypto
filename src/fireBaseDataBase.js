// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdJOTmg0gljzYINkB0Kopp0tt_zob4BmY",
  authDomain: "cryptofirebasedatabase.firebaseapp.com",
  databaseURL: "https://cryptofirebasedatabase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cryptofirebasedatabase",
  storageBucket: "cryptofirebasedatabase.appspot.com",
  messagingSenderId: "302830727914",
  appId: "1:302830727914:web:2b760b6b35b8483b215d93",
  measurementId: "G-YDTWR61TSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);

export default app;



