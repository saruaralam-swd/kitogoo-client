import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Services/Loading';
import LimitService from './LimitService';

const LimitServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
        const { serviceLimit } = data;
        setServices(serviceLimit);
        setLoading(false)
      })
  }, []);

  return (
    <div className='px-5 md:px-0 md:w-4/5 mx-auto my-20 space-y-5'>
      <h2 className='text-2xl font-semibold hover:text-indigo-500 hover:underline inline-block'>
        <Link to='/allServices'>Services</Link>
      </h2>

      <div className='grid md:grid-cols-3 gap-5'>
        {
          loading ?
            <>
              <div className='h-[200px] flex items-center justify-center'>
                <button className="btn btn-lg text- btn-outline border-none text-indigo-600 loading lowercase">loading...</button>
              </div>
            </>
            :
            services.map(ser => <LimitService key={ser._id} service={ser}></LimitService>)
        }
      </div>

      <div className='mx-auto text-center'>
        <Link to='/allServices'><button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md duration-500 hover:bg-indigo-700 text-white'>see all</button></Link>
      </div>
    </div>
  );
};

export default LimitServices;