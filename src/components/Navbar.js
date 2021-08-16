import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SIGNUPLINK } from './utils';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src="/Logo-White.png" alt="" className='navbar-icon' />
              WYMF2021
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  #WYMF2021
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/event'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Event
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/terms'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Terms
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/faq'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <a href={SIGNUPLINK} className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button></a>
                ) : (
                  <a href={SIGNUPLINK} className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                    </a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
