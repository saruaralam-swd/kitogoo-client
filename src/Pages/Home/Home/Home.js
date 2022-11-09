import React from 'react';
import LimitServices from '../LimitServices/LimitServices';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import useTitle from '../../../hooks/useTitle';
import Discounts from '../Discounts/Discounts';

const Home = () => {
  useTitle('Home')
  return (
    <main>
      <Banner />
      <LimitServices />
      <Discounts />
      <Facilities />
    </main>
  );
};

export default Home;