import React from 'react';
import spinner from '../assests/svg/spinner.svg';
const Spinner = () => {
  return (
    <div className='flex justify-center b-black bg-opacity-5 items-center fixed top-0 bottom-0 left-0'>
      <div>
        <img src={spinner} alt="loading..." className='h-24'/>
      </div>
    </div>
  );
}
export default Spinner;
