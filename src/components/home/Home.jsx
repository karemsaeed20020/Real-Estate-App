import React from 'react';
import Hero from './hero/Hero';
import Featured from '../featured/Featured';
import Recent from '../recent/Recent';
import Awards from './Awards/Awards';
import Locations from './Locations/Locations';
import Team from './team/Team';
import Price from './price/Price';

const Home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Recent />
        <Awards />
        <Locations />
        <Team />
        <Price />
    </>
  )
}

export default Home
