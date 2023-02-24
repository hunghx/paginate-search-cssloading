// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXKUYBJ892eeQG4aevsoiklqMAVbpuftM",
    authDomain: "lamsosad-2003.firebaseapp.com",
    projectId: "lamsosad-2003",
    storageBucket: "lamsosad-2003.appspot.com",
    messagingSenderId: "429263297764",
    appId: "1:429263297764:web:7d1b1d5729318351c120f1",
    measurementId: "G-YRY6TZ44LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
