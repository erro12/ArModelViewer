import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section>
        <p className='footer-heading'>
          Social Media
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/' className='footer-link-logo-set'>
              <img src={require('../../images/openseas-logo.png')} alt='openseas' className='link-img-logo' />
              <h2>Open Seas</h2>
            </Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/' className='footer-link-logo-set'>
              <img src={require('../../images/twitter-logo.png')} alt='openseas' className='link-img-logo' />
              <h2>Twitter</h2>
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className='footer-line'></div>
        <div>
          <p className='website-rights'>Copyright Velocity Inc. Made in Webflow.</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;