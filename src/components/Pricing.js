import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {SIGNUPLINK} from './utils'

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Terms of Competition</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Age Range</h3>
                <h4>14 - 28</h4>
                <p>years old</p>
                <ul className='pricing__container-features'>
                  <li>*Age as of 1 Jan 2021</li>
                  <li></li>
                  <li></li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Yes!
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsMusicNoteBeamed />
                </div>
                <h3>Record A Song</h3>
                <h4>8 mins</h4>
                <p>maximum</p>
                <ul className='pricing__container-features'>
                <li>Song can be in any language</li>
                  <li>You can play instruments</li>
                  <li>No editing of vocals</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Yes!
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <AiOutlineVideoCamera />
                </div>
                <h3>Submit Video</h3>
                <h4>23 Aug</h4>
                <p>till 13 Sep</p>
                <ul className='pricing__container-features'>
                  <li>Refine your videos</li>
                  <li>Upload to Youtube</li>
                  <li>Submit the link</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Yes!
                </Button>
              </div>
            </Link>
          </div>
        </div>
        <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <a href={SIGNUPLINK}>
        <Button buttonSize='btn--wide' buttonColor='green'>
                  Sign up now!
                </Button>
                </a>
                </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
