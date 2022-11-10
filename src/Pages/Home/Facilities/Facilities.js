import { Link } from 'react-router-dom';
import img1 from '../../../assets/facilities/1.png'
import img2 from '../../../assets/facilities/2.png'
import img3 from '../../../assets/facilities/3.png'
import img4 from '../../../assets/facilities/4.png'
import img5 from '../../../assets/facilities/5.png'
import img6 from '../../../assets/facilities/6.png'

const Facilities = () => {
  return (
    <div className='px-5 md:px-0 md:w-4/5 mx-auto my-20'>
      <h2 className='text-2xl font-semibold hover:text-indigo-500 hover:underline mb-2 inline-block'>
        <Link to=''>Facilities</Link>
      </h2>

      <div className='grid md:grid-cols-3 gap-3'>
        <div className='flex gap-4 items-start'>
          <img src={img1} className='w-11' alt="" />
          <div>
            <h2 className='font-semibold text-lg text-indigo-500 hover:underline'>TOUR LAYOUT</h2>
            <p className=' text-gray-500 '>We can customize trip to all destination as per our guest’s requirements. You have freedom to add days, places, foods and activities as you wish.</p>
          </div>
        </div>
        
        <div className='flex gap-4 items-start'>
          <img src={img2} className='w-11' alt="" />
          <div>
            <h2 className='font-semibold text-lg text-indigo-500 hover:underline'>UNPARALLELED SUPPORT</h2>
            <p className=' text-gray-500 '>Weather its day or night or windy rainy day or a hot summer day, we will be there to provide any required support that you need</p>
          </div>
        </div>
        
        <div className='flex gap-4 items-start'>
          <img src={img3} className='w-11' alt="" />
          <div>
            <h2 className='font-semibold text-lg text-indigo-500 hover:underline'>AFFORDABLE PRICING</h2>
            <p className=' text-gray-500 '>Initially you may argue with the price but when you start your tour you will find it justified. If you are not happy with us we will refund you back.</p>
          </div>
        </div>
        
        <div className='flex gap-4 items-start'>
          <img src={img4} className='w-11' alt="" />
          <div>
            <h2 className='font-semibold text-lg text-indigo-500 hover:underline'>TOUR LAYOUT</h2>
            <p className=' text-gray-500 '>Before each tour with us, we will share a details tour itinerary with you so that you get well prepared for the tour. We will be committed to deliver the service as specified in the outline.</p>
          </div>
        </div>
        
        <div className='flex gap-4 items-start'>
          <img src={img5} className='w-11' alt="" />
          <div>
            <h2 className='font-semibold text-lg text-indigo-500 hover:underline'>SECURITY & INSURANCE</h2>
            <p className=' text-gray-500 '>We consider our guest security and privacy  with high priority which is one of the most inevitable part of our service. We also arrange travel insurance for our guest of they are willing to take one.</p>
          </div>
        </div>
        
        <div className='flex gap-4 items-start'>
          <img src={img6} className='w-11' alt="" />
          <div>
            <h2 className='font-semibold text-lg text-indigo-500 hover:underline'>SATISFACTION GUARANTEED</h2>
            <p className=' text-gray-500 '>We make sure our guest get most our of the tour has to offer and make arrangement to make you satisfied.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Facilities;