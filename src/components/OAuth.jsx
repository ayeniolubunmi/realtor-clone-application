import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const OAuth =() => {
  const navigate = useNavigate()
  const onGoogleClick=async()=>{
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth,provider);
      const user = result.user;
      const docRef = doc(db, "users", user.udi);
      const snapShot = getDoc(docRef);
      if(!snapShot.exists){
        await setDoc(docRef,{
          name:user.displayName,
          email:user.email,
          timestamp:serverTimestamp()
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not authorize with Google")
    }
  }
  return (
      <button type="button" onClick={onGoogleClick} className='flex justify-center items-center text-xl font-semibold
       px-7 py-3 bg-red-600
       w-full text-white shadow-md hover:bg-red-700 active:bg-red-800 hover:shadow-lg active:shadow-lg 
       rounded-xl cursor-pointer'>
        < FcGoogle className='text-2xl rounded-full bg-white mr-2' />
        Continue with google
      </button>
  );
}

export default OAuth;
