import React from 'react';
import Services from '../LimitServices/LimitServices';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';

const Home = () => {
  return (
    <div className='bg-[#FCF7F4]'>
      <Banner></Banner>
      <Services></Services>
      <Facilities></Facilities>
    </div>
  );
};

export default Home;