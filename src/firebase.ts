// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcZH5ZGmvxnyC2FoB33L0N6d2yEb6273w",
  authDomain: "weather-app-3b7db.firebaseapp.com",
  projectId: "weather-app-3b7db",
  storageBucket: "weather-app-3b7db.appspot.com",
  messagingSenderId: "168039554692",
  appId: "1:168039554692:web:50370b0b769c54efceacd1",
  measurementId: "G-0ETPHMZPY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
