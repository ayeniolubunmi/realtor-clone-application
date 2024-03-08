import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
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