// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-j5dCoo1gZ0UKnOp9L3T6JNYQu6nDSGU",
  authDomain: "concptional-project.firebaseapp.com",
  projectId: "concptional-project",
  storageBucket: "concptional-project.firebasestorage.app",
  messagingSenderId: "775086564144",
  appId: "1:775086564144:web:2a80fd9c989b592e981ef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);