import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAAb1qM531ouFXCipdOSzqdwmIZ9kSQwlk",
  authDomain: "fir-f9f30.firebaseapp.com",
  projectId: "fir-f9f30",
  storageBucket: "fir-f9f30.appspot.com",
  messagingSenderId: "840448268106",
  appId: "1:840448268106:web:7173a14a97179a24ed53b3",
  measurementId: "G-7XE5CXX8JG"
};

const Firebase = initializeApp(firebaseConfig);
const db = getFirestore(Firebase)
export {db}