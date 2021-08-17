import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import {IGLINK,FBLINK,YTLINK} from '../../utils'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Sayang Sembawang Telegram Group to receive the latest news
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
            <Link to='/'>Competition</Link>
            <Link to='/event'>Event</Link>
            <Link to='/terms'>Terms</Link>
            <Link to='/faq'>FAQ</Link>
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
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Organisers</h2>
            <a href="http://pa.gov.sg">People's Association</a>
            <a href={FBLINK}>Woodlands Youth Network</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="/Logo-White.png" alt="" className='navbar-icon'/>
              #WYMF2021
            </Link>
          </div>
          <small className='website-rights'>Woodlands Youth Music Festival © 2021</small>
          <div className='social-icons'>
            <a href={FBLINK}
              className='social-icon-link'
              to='/'
              aria-label='Facebook'
            >
              <FaFacebook />
              </a>
              <a href={IGLINK}
              className='social-icon-link'
              to='/'
              aria-label='Instagram'
            >
              <FaInstagram />
              </a>
              <a href={YTLINK}
              className='social-icon-link'
              to='/'
              aria-label='Youtube'
            >
              <FaYoutube />
              </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
