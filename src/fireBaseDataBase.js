import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe8KraOvOanItlM6TjZTswZDl1AC4MRWw",
  authDomain: "crypto-database-2.firebaseapp.com",
  databaseURL: "https://crypto-database-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crypto-database-2",
  storageBucket: "crypto-database-2.firebasestorage.app",
  messagingSenderId: "643505920436",
  appId: "1:643505920436:web:261a07b90f82736a057ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, database, db };
