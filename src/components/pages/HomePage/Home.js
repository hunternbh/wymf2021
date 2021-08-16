import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSectionfaq from '../../HeroSection-faq';
import HeroSectionterms from '../../HeroSection-terms';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

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
