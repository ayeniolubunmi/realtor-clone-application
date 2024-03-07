import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsFillEyeSlashFill,BsFillEyeFill} from 'react-icons/bs';
import OAuth from '../components/OAuth';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    })
    const {name,email,password}=formData;
    const [showPassword, setShowPassword]=useState(false)
    const onChange=()=>{

    }
  return (
    <section>
        <h1 className='text-3xl text-center font-bold mt-6'>Sign up</h1>
        <div className='flex justify-center items-center px-6 py-12 max-w-6xl mx-auto'>
            <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                <img 
                src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="keys" className='w-full rounded-2xl' />
            </div>
            <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                <form>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={onChange} 
                    placeholder='Full Name'
                    className='mt-6 w-full text-xl text-gray-600 bg-white px-4 py-2 rounded-xl border-gray-300'/>
                    <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={onChange} 
                    placeholder='Enter email address'
                    className='mt-6 w-full text-xl text-gray-600 bg-white px-4 py-2 rounded-xl border-gray-300'/>
                    <div className='relative mt-6'>
                        <input 
                        type={showPassword ? "text" :"password"} 
                        id="password" 
                        value={password} 
                        onChange={onChange} 
                        placeholder='Enter password'
                        className='w-full text-xl text-gray-600 bg-white px-4 py-2 rounded-xl border-gray-300'/>
                        {showPassword ? 
                        <BsFillEyeSlashFill className='absolute right-3 top-3 cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)} />
                        :<BsFillEyeFill className='absolute right-3 top-3 cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)} />
                        }
                    </div>
                    <div className='flex justify-between items-center whitespace-nowrap mb-6'>
                        <p className='mt-6 text-sm font-medium md:text-lg'>
                            Have an acount?
                            <Link to={'/sign-in'} className='text-red-600 hover:text-red-700 transition duration-150 ease-in-out ml-2'>
                                Sign In
                            </Link>
                        </p>
                        <p className='mt-6 text-sm'>
                            <Link to={"/forgotpassword"} className='text-blue-600 text-lg hover:text-blue-700 transition ease-in-out duration-200'>
                            Forgot password
                            </Link>
                        </p>
                    </div>
                    <button type="submit" 
                    className="text-xl px-7 py-3
                    bg-blue-500 hover:bg-blue-600
                    active:bg-blue-700 w-full rounded-xl
                    text-white shadow-md 
                    hover:shawdow-lg active:shadow-lg">Sign up</button>
                    <div 
                    className='my-4 flex items-center before:flex-1 before:border-t before:text-gray-700 after:flex-1 after:border-t after:text-gray-700'>
                        <p className='text-center font-semibold mx-4'>OR</p>
                    </div>
                    <OAuth/>
                </form>
            </div>
        </div>
    </section>
  );
}

export default SignUp;
