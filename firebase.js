// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL7qGz3GYYPFhmNqEnGhph5WieavZD7C4",
  authDomain: "inventory-management-app-3a63a.firebaseapp.com",
  projectId: "inventory-management-app-3a63a",
  storageBucket: "inventory-management-app-3a63a.appspot.com",
  messagingSenderId: "227170346396",
  appId: "1:227170346396:web:e81a6606468cb00ffed459",
  measurementId: "G-T29LP7QYNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}
