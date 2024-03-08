import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();
  const[formData, setFormData]=useState({
    name:auth?.currentUser?.displayName,
    email:auth?.currentUser?.email,
  })
  const{name,email}=formData;
  const navigate =useNavigate()
  const onLoggedOut=()=>{
    const auth = getAuth();
    auth.signOut()
    navigate('/');
  }
  return (
    <section className=' flex flex-col justify-center items-center max-w-6xl mx-auto'>
     <h1 className='text-xl text-center font-bold mt-6'>My profile</h1>
     <div className='w-full md:w-[50%] mt-6 px-3'>
      <form>
        <input 
        type="name" 
        value={name} 
        disabled 
        className='w-full px-4 py-2 border text-gray-700 border-gray-600 rounded-xl text-xl bg-white mt-6' />
        <input 
        type="email" 
        value={email} disabled 
        className='w-full px-4 py-2 border rounded-xl text-gray-700 border-gray-600 text-xl bg-white mt-6' />
        <div className='flex justify-between items-center whitespace-nowrap mt-6 text-sm sm:text-lg'>
          <p className='flex items-center'>
            Do you want to change? 
            <span className='cursor-pointer text-red-400 hover:text-red-600 ml-1 transition duration-200 ease-in-out'>
              Edit
            </span>
          </p>
          <p 
          className='cursor-pointer
           text-blue-400
            hover:text-blue-600 transition duration-200 ease-in-out' onClick={onLoggedOut}>Sign out</p>
        </div>
      </form>
     </div>
    </section>
  );
}

export default Profile;
