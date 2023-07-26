import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkM3W6Z10oCrwzLrveN1vDAj6RXu8qL70",
  authDomain: "yt-clone-nel.firebaseapp.com",
  projectId: "yt-clone-nel",
  storageBucket: "yt-clone-nel.appspot.com",
  messagingSenderId: "916422895387",
  appId: "1:916422895387:web:12916ab7d6c575c30095be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };