// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKz2fK25WHAd9IDXyQas_Iq6SCuW3XRkg",
  authDomain: "hng-task3-fcc69.firebaseapp.com",
  projectId: "hng-task3-fcc69",
  storageBucket: "hng-task3-fcc69.appspot.com",
  messagingSenderId: "897139356036",
  appId: "1:897139356036:web:e156b3598d2fc8fa09add1",
  measurementId: "G-NDFZZQ6D96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Sign out the current user
export const signOutCurrentUser = async () => {
  return await signOut(auth);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
