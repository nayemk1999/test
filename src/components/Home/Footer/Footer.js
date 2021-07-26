import React from 'react';
import './Footer.css'

import linkedIn from  '../../../image/linkedin.svg';
import facebook from '../../../image/facebook.svg';
import instagram from '../../../image/instagram.svg';
import youtube from '../../../image/youtube.svg';
import pinterest from '../../../image/pinterest.svg';

const Footer = () => {
    return (
        <div className='social-container mt-5'>
            <div className='social-content'>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={facebook} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={instagram} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={pinterest} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={linkedIn} alt="" />
                </a>
                <a href="https://youtube.com" className='socialIcon'>
                    <img src={youtube} alt="" />
                </a>
            </div>
            <div className='contact-container'>
                <div className='contact-content'>address</div>
                <div className='contact-content'>Toprak Real Estate</div>
                <div className='contact-content'>Dhaka, Bangladesh</div>
            </div>
            <div className='contact-tech'>
                <a href="mailto:hello@gmail.com/" alt=''>
                    hello@admin.com
                </a>
                <a href="tel:+880-01121112222" alt=''>
                    +880-01121112222
                </a>
                <a href="/" alt=''>
                    Toprak.com
                </a>
            </div>
        </div>
    );
};

export default Footer;