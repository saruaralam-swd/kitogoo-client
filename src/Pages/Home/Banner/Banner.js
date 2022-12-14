import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner4.png'

const Banner = () => {
  return (
    <div >
      <div className='md:flex justify-between items-center px-5 my-10'>
        <div className=''>
          <h2 className=' text-3xl md:text-5xl font-semibold font-sans mb-5'>Get Your Best Guide</h2>
          <Link to='/allServices'><button className="bg-indigo-600  px-4 py-2 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white">see my service</button></Link>
          <p></p>
        </div>
        
        <img className='md:w-2/5' src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;