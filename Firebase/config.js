// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-zn5qmWr7Yh-juicelCkpyYtjYS3VIB8",
  authDomain: "react-native-6c2d6.firebaseapp.com",
  projectId: "react-native-6c2d6",
  storageBucket: "react-native-6c2d6.appspot.com",
  messagingSenderId: "790429520749",
  appId: "1:790429520749:web:4bc4b83aeb79b17f8b4064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);