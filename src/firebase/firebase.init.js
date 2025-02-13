// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRWHT5Wy_gnOOctbqO8iM07MPeX_y28F4",
  authDomain: "simple-firebase-b8592.firebaseapp.com",
  projectId: "simple-firebase-b8592",
  storageBucket: "simple-firebase-b8592.firebasestorage.app",
  messagingSenderId: "581429364907",
  appId: "1:581429364907:web:30b6ee9d37abd86f4bcfee",
  measurementId: "G-30F6MR2D0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;