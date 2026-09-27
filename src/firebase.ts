// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGpfISNT5wVVXYbtFZ1oKOMg61-cLw4j8",
  authDomain: "ionic-crud-photo.firebaseapp.com",
  databaseURL: "https://ionic-crud-photo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ionic-crud-photo",
  storageBucket: "ionic-crud-photo.firebasestorage.app",
  messagingSenderId: "433765123421",
  appId: "1:433765123421:web:9690817a8866cf714b14b4",
  measurementId: "G-J5D447FMMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);