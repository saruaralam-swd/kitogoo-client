import React from 'react';
import './Discounts.css';
// import map from '../../../assets/discount/map.png'
import world from '../../../assets/discount/world.png'
import { Link } from 'react-router-dom';

const Discounts = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <h2 className='text-2xl font-semibold hover:text-indigo-500 hover:underline mb-2 inline-block'>
        <Link to=''>Get Discount</Link>
      </h2>

      <div className='border bg_img'>
        <div className='flex items-center'>
          <div className=''>
            <img src={world} alt="" />
          </div>

          <div className=' space-y-4'>
            <h2 className='font-semibold text-xl'>Get instant discounts</h2>
            <p className='text-sm'>Simply sign into your kitoGoo account and look for the <br /> blue Genius logo to save</p>
            <div className='flex gap-5'>
              <Link to='/login'><button className='border text-indigo-600 hover:bg-indigo-200 font-semibold px-2 py-1 rounded-md'>Sign in</button></Link>
              <Link to='/signup'><button className='text-indigo-600 hover:bg-indigo-200 font-semibold px-2 py-1 rounded-md'>Register</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;