import React from 'react';
import { FcGoogle } from "react-icons/fc";


const OAuth = () => {
  return (
      <button type="" className='flex justify-center items-center text-xl font-semibold
       px-7 py-3 bg-red-600
       w-full text-white shadow-md hover:bg-red-700 active:bg-red-800 hover:shadow-lg active:shadow-lg 
       rounded-xl cursor-pointer'>
        < FcGoogle className='text-2xl rounded-full bg-white mr-2' />
        Continue with google
      </button>
  );
}

export default OAuth;
