import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyikkmFI6kx-cZg0Z27OikM0Htg37g-tg",
  authDomain: "fir-databasecrypto.firebaseapp.com",
  databaseURL: "https://fir-databasecrypto-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-databasecrypto",
  storageBucket: "fir-databasecrypto.appspot.com",
  messagingSenderId: "476653307089",
  appId: "1:476653307089:web:aeadd26cf517fea56af1f0",
  measurementId: "G-1JDB349V1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, auth, database };



