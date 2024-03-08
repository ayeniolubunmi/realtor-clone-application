import { getAuth, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase'
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const Profile = () => {
  const auth = getAuth();
  const[formData, setFormData]=useState({
    name:auth?.currentUser?.displayName,
    email:auth?.currentUser?.email,
  })
  const{name,email}=formData;
  const [changeDetails,setChangeDetails] = useState(false)
  const navigate =useNavigate()
  const onLoggedOut=()=>{
    const auth = getAuth();
    auth.signOut()
    navigate('/');
  }
  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  }
  const onSubmit=async()=>{
    try {
      const auth = getAuth();
      if(auth.currentUser.displayName !== name){
        await updateProfile(auth.currentUser,{
          displayName:name,
        });
        const docRef = doc(db,"users", auth.currentUser.uid);
        await updateDoc(docRef,{
          name,
        })
      }
      toast.success("Update profile details")
    } catch (error) {
      toast.error('Could not update the profile details')
    }
  }
  return (
    <section className=' flex flex-col justify-center items-center max-w-6xl mx-auto'>
     <h1 className='text-xl text-center font-bold mt-6'>My profile</h1>
     <div className='w-full md:w-[50%] mt-6 px-3'>
      <form>
        <input 
        id="name" 
        type='text'
        value={name} 
        disabled={!changeDetails}
        onChange={onChange}
        className={`w-full px-4 py-2 border text-gray-700 border-gray-600 rounded-xl text-xl bg-white mt-6 ${changeDetails && "bg-red-600 hover:bg-red-200"}`} />
        <input 
        type="email" 
        value={email} disabled 
        className='w-full px-4 py-2 border rounded-xl text-gray-700 border-gray-600 text-xl bg-white mt-6' />
        <div className='flex justify-between items-center whitespace-nowrap mt-6 text-sm sm:text-lg'>
          <p className='flex items-center'>
            Do you want to change? 
            <span onClick={()=>{
              changeDetails && onSubmit();
              setChangeDetails((prevState)=>!prevState);
            }} className={`cursor-pointer text-red-400 hover:text-red-600 ml-1 transition duration-200 ease-in-out`}>
              {changeDetails?"Apply change":"Edit"}
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
