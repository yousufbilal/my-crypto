// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);