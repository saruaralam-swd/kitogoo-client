import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SeeReview from './SeeReview';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, img, description, price } = service;
  console.log(service)

  const [review, setReview] = useState([]);

  // create review
  const handleCreateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    const time = new Date().getTime();

    const reviewDate = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };

    const createReview = {
      photo: user?.photoURL,
      userName: user?.displayName,
      email: user?.email,
      serviceId: _id,
      serviceName: title,
      message,
      time,
      reviewDate,
      serviceImg: img,
    };

    fetch('http://localhost:5000/addReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(createReview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          const newReview = [createReview, ...review];
          form.reset();
          setReview(newReview);
        }
      })
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review?id=${_id}`)
      .then(res => res.json())
      .then(data => {
        const result = data.sort((a, b) => b.time - a.time);
        setReview(result)
      })
  }, [_id]);

  return (
    <div>
      <section className='px-5 my-10'>
        <div className='grid md:grid-cols-5 gap-5'>
          <div className=' col-span-3  space-y-3'>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>{description}</p>
          </div>
          
          <div className=' col-span-2  rounded-md shadow-md'>
            <img src={img} className='w-3/4 mx-auto' alt="" />

            <div className='text-center space-y-2'>
              <h2 className='font-bold text-md'>{title}</h2>
              <div className="rating rating-sm">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              </div>
              <p className='text-gray-400'>{review.length} review</p>
              <p className='font-bold text-2xl'>${price}</p>
            </div>

          </div>
        </div>
      </section>

      <div className='divider px-10'></div>

      <section className='grid md:grid-cols-7 gap-10 px-5 my-10'>
        <aside className='border col-span-2'>
          <div>
            <h2 className='text-3xl font-semibold'>Customer reviews</h2>
            <div className='flex items-center gap-5'>
              <div className="rating  rating-sm">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              </div>

              <p className='font-semibold text-lg'>4.4 out of 5</p>
            </div>
            <p>{Math.floor(Math.random() * 1000000)} global ratings</p>
            <div>
              <progress className="progress progress-warning w-56" value="0" max="100"></progress> <br />
              <progress className="progress progress-warning w-56" value="10" max="100"></progress> <br />
              <progress className="progress progress-warning w-56" value="40" max="100"></progress><br />
              <progress className="progress progress-warning w-56" value="70" max="100"></progress><br />
              <progress className="progress progress-warning w-56" value="100" max="100"></progress>
            </div>
          </div>
        </aside>

        <div className='space-y-5 col-span-4'>
          <div>
            {
              user?.uid ?
                <>
                  <h2 className='text-xl font-bold mb-1'>Review this product</h2>
                  <p className='mb-1'>Share your thoughts with other customers</p>

                  <form onSubmit={handleCreateReview} className='space-y-3 mt-2'>
                    <textarea name='message' className=" placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" placeholder="Write Your Message..." required />
                    <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Send</button>
                  </form>
                </>
                :
                <></>
            }
          </div>

          <div>
            {
              user?.uid ?
                <>
                  <p className='text-lg'><span className='text-lg font-bold'>{review.length}</span> review found about <span className='font-semibold'>{title}</span> service</p>
                  <div>
                    {
                      review.map(rew => <SeeReview key={rew._id} review={rew}></SeeReview>)
                    }
                  </div>
                </>
                :
                <>
                  <h2>Please <Link to='/login' className='text-indigo-600'>login</Link> to add a review</h2>
                  {
                    review.map(rew => <SeeReview key={rew._id} review={rew}></SeeReview>)
                  }
                </>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;