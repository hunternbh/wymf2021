import React from 'react';
import HeroSectionblank from '../../HeroSection-blank';
import { homeObjOne, homeObjTwo} from './Data';

function Products() {
  return (
    <>
      <HeroSectionblank {...homeObjOne} />
      <HeroSectionblank {...homeObjTwo} />
    </>
  );
}

export default Products;
