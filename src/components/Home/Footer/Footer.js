import React from "react";
import "./Footer.css";

import linkedIn from "../../../image/linkedin.svg";
import facebook from "../../../image/facebook.svg";
import instagram from "../../../image/instagram.svg";
import youtube from "../../../image/youtube.svg";
import pinterest from "../../../image/pinterest.svg";

import { faEdit, faTrash, faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebook,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    // <div className='social-container mt-5'>
    //     <div className='social-content'>
    //         <a href="https://youtube.com" className='socialIcon'>
    //             <img src={facebook} alt="" />
    //         </a>
    //         <a href="https://youtube.com" className='socialIcon'>
    //             <img src={instagram} alt="" />
    //         </a>
    //         <a href="https://youtube.com" className='socialIcon'>
    //             <img src={pinterest} alt="" />
    //         </a>
    //         <a href="https://youtube.com" className='socialIcon'>
    //             <img src={linkedIn} alt="" />
    //         </a>
    //         <a href="https://youtube.com" className='socialIcon'>
    //             <img src={youtube} alt="" />
    //         </a>
    //     </div>
    //     <div className='contact-container'>
    //         <div className='contact-content'>address</div>
    //         <div className='contact-content'>Toprak Real Estate</div>
    //         <div className='contact-content'>Dhaka, Bangladesh</div>
    //     </div>
    //     <div className='contact-tech'>
    //         <a href="mailto:hello@gmail.com/" alt=''>
    //             hello@admin.com
    //         </a>
    //         <a href="tel:+880-01121112222" alt=''>
    //             +880-01121112222
    //         </a>
    //         <a href="/" alt=''>
    //             Toprak.com
    //         </a>
    //     </div>
    // </div>

    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Apartment</a>
                </li>
                <li>
                  <a href="#">Land</a>
                </li>
                <li>
                  <a href="#">Lorem</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Toprak Real Estate</h3>
              <p>
                Toprak is a modular property marketplace that helps you find,
                compare, and purchase a preferable modular apartment and land.
              </p>
            </div>
            <div class="col item social">
              <a href="#">
                <FaFacebookF class="icon ion-social-facebook" />
              </a>
              <a href="#">
                <FaTwitter class="icon ion-social-twitter" />
              </a>
              <a href="#">
                <FaPinterestP class="icon ion-social-snapchat" />
              </a>
              <a href="#">
                <AiFillInstagram class="icon ion-social-instagram" />
              </a>
              <a href="#">
                <FaYoutube class="icon ion-social-instagram" />
              </a>
            </div>
          </div>
          <p class="copyright">Toprak Real Estate © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
