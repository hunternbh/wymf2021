import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import {IGLINK,FBLINK,YTLINK} from '../../utils'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Sayang Sembawang Telegram Group to receive the latest news and trends
        </p>

            <Button buttonStyle='btn--outline'>
              <a href="https://t.me/sayangsembawang" className="link">
              Telegram
              </a>
              </Button>

      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Directory</h2>
            <Link to='/sign-up'>Competition</Link>
            <Link to='/'>Terms</Link>
            <Link to='/'>Event</Link>
            <Link to='/'>FAQ</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href={IGLINK}>Instagram</a>
            <a href={FBLINK}>Facebook</a>
            <a href={YTLINK}>Youtube</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              #WYMF2021
            </Link>
          </div>
          <small className='website-rights'>Woodlands Youth Music Festival © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
