import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_e2E6odgiFbU35JZl7luIk969OW5090g",
  authDomain: "astro-6e5c3.firebaseapp.com",
  projectId: "astro-6e5c3",
  storageBucket: "astro-6e5c3.appspot.com",
  messagingSenderId: "680319235742",
  appId: "1:680319235742:web:8cd6dc725f56054194ad8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);