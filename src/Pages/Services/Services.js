import React, {  useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Loading from './Loading';
import Service from './Service';

const Services = () => {
  useTitle('Services')
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);

  const pages = Math.ceil(count / size);
  const ary = [...Array(pages).keys()];


  useEffect(() => {
    fetch('https://kitogoo-server.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        const { count, allService } = data;
        setCount(count)
        setLoading(false)
        setAllServices(allService)
      })
  }, [setLoading])

  return (
    <div className='md:w-4/5 px-5 md:px-0  mx-auto my-20 space-y-5'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          loading ?
            <>
              <Loading></Loading>
            </>
            :
            allServices.map(ser => <Service key={ser._id} service={ser}></Service>)
        }
      </div>

      <div>
        <p>Currently selected page: {page + 1} and size : {size}</p>

        {
          ary.map(number => <button
            onClick={() => setPage(number)}
            key={number}
            className={page === number ? 'border px-2 rounded-md mx-1 bg-gray-300' : 'border px-2 rounded-md mx-1'}
          > {number + 1}</button>)
        }

        <select onChange={(e) => setSize(e.target.value)} className='border px-2 rounded-md '>
          <option value='2'>2</option>
          <option value='5'>5</option>
        </select>
      </div>
    </div>
  );
};

export default Services;