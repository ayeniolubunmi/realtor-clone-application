import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathMathRoute=(route)=>{
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='b-white border-b shadow-sm max-w-6xl mx-auto sticky top-0 z-50 py-3 w-full'>
      <header className='flex justify-between items-center px-8'>
        <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" 
            alt="logo" className='h-5 cursor-pointer' onClick={()=>navigate("/")} />
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li className={`text-sm border-b-[3px] text-gray-600 py-3 border-transparent cursor-pointer ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                <li  className={`text-sm border-b-[3px] text-gray-600 py-3 border-transparent cursor-pointer ${pathMathRoute("/offers") && "text-black border-b-red-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
                <li  className={`text-sm border-b-[3px] text-gray-600 py-3 border-transparent cursor-pointer ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Sign in</li>
            </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
