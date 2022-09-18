import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { MdFingerprint } from 'react-icons/md';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {

  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // }

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);
  console.log(click)

  return (
    <>
      <IconContext.Provider value={{ color: '#171A1C' }}>
        <div className='navbar'>
          <div className='container'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src={require('../../images/logo-with-title.png')} alt='logo' className='img-logo' />
                ''
              </Link>
              <div className='nav-container'>
                <Nav />
              </div>

              {/* <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div> */}
              {/* <nav>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      About Us
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/twitter' className='nav-links' onClick={closeMobileMenu}>
                      Twitter
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/opensea' className='nav-links' onClick={closeMobileMenu}>
                      Opensea
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>
                      FAQs
                    </Link>
                  </li>
                  <li className='nav-btn'>
                    {button ? (
                      <Link to='/sign-up' className='btn-link'>
                        <Button buttonStyle='btn--outline' buttonSize='btn--large' buttonColor='primary' onClick={closeMobileMenu}>GET NFTS</Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className='btn-link'>
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile' buttonColor='primary' onClick={closeMobileMenu}>GET NFTS</Button>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav> */}
              <div className='nav-nft-button'>
                <Button
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  buttonColor='primary'
                  onClick={closeMobileMenu}
                >
                  GET NFTS
                </Button>
              </div>
              {/* <Button buttonStyle='btn--outline' buttonSize='btn--large' buttonColor='primary' onClick={closeMobileMenu}>GET NFTS</Button> */}
            </div>
            <div className='nav-below'>
              <Nav />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

export const Nav = () => {
  return (
    <nav>
      <ul
        // className={click ? 'nav-menu active' : 'nav-menu'}
        className='nav-menu'
      >
        <li className='nav-item'>
          <Link to='/'
            className='nav-links'
          // onClick={closeMobileMenu}
          >
            About Us
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/twitter'
            className='nav-links'
          // onClick={closeMobileMenu}
          >
            Twitter
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/opensea'
            className='nav-links'
          // onClick={closeMobileMenu}
          >
            Opensea
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/faqs'
            className='nav-links'
          // onClick={closeMobileMenu}
          >
            FAQs
          </Link>
        </li>
        {/* <li className='nav-btn'>
          {button ? (
            <Link to='/sign-up' className='btn-link'>
              <Button buttonStyle='btn--outline' buttonSize='btn--large' buttonColor='primary' onClick={closeMobileMenu}>GET NFTS</Button>
            </Link>
          ) : (
            <Link to='/sign-up' className='btn-link'>
              <Button buttonStyle='btn--outline' buttonSize='btn--mobile' buttonColor='primary' onClick={closeMobileMenu}>GET NFTS</Button>
            </Link>
          )}
        </li> */}
      </ul>
    </nav>
  )
}