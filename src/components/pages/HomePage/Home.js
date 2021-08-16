import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSectionfaq from '../../HeroSection-faq';
import HeroSectionterms from '../../HeroSection-terms';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSectionterms {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSectionfaq {...homeObjFour} />
    </>
  );
}

export default Home;
