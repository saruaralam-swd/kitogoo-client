import React from 'react';
import Services from '../LimitServices/LimitServices';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
  useTitle('Home')
  return (
    <div className=''>
      <Banner></Banner>
      <Services></Services>
      <Facilities></Facilities>
    </div>
  );
};

export default Home;