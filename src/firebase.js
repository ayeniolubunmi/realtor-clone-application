// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgyhEiKcQprLhkDFHBHOZAd7C1tG-_dJI",
  authDomain: "realtor-clone-app-513b5.firebaseapp.com",
  projectId: "realtor-clone-app-513b5",
  storageBucket: "realtor-clone-app-513b5.appspot.com",
  messagingSenderId: "805333793258",
  appId: "1:805333793258:web:f65fb0587cf3deb7e5da93"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();