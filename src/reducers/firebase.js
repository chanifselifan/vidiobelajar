// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHYee6a2aQWamn9glg8ufAX-kuvELvCgs",
  authDomain: "vidiobelajar-c73d3.firebaseapp.com",
  projectId: "vidiobelajar-c73d3",
  storageBucket: "vidiobelajar-c73d3.firebasestorage.app",
  messagingSenderId: "615531546907",
  appId: "1:615531546907:web:445125fb4228636e56ebbe",
  measurementId: "G-ZJB2B2JSFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
