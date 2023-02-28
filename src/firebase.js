// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv3CF26p_XP7AIlcWv-mfYUWCMAkVHZJ8",
  authDomain: "quanlybanhang-25443.firebaseapp.com",
  projectId: "quanlybanhang-25443",
  storageBucket: "quanlybanhang-25443.appspot.com",
  messagingSenderId: "1068110964418",
  appId: "1:1068110964418:web:22744d0569e0eca2013d5b",
  measurementId: "G-EQDBSPV7ZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
