import React from 'react';
import "./RecentlyAdded.css"
import img1 from "../../../image/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg"
import img2 from "../../../image/irina-ermakova-V9rTX32KuTI-unsplash.jpg"
import img3 from "../../../image/jason-dent-w3eFhqXjkZE-unsplash.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
const RecentlyAdded = () => {
  return (
    <div className="row container mx-auto">
      <h2 className="text-center mt-3">Recently Added</h2>
      <div className="col-md-4 col-sm-12 g-5">

        <div id="cardStyle" className="card shadow m-0 m-auto" style={{ width: "18rem" }}>
          <div className="">
            <img style={{ height: '200px' }} src={img1} className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h5 style={{ height: '45px' }} >RM Garden <span className="sale">sale</span> </h5>
            <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
            <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
          </div>
        </div>

      </div>
      <div className="col-md-4 col-sm-12 g-5">

        <div id="cardStyle" className="card shadow m-0 m-auto" style={{ width: "18rem" }}>
          <div className="">
            <img style={{ height: '200px' }} src={img2} className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h5 style={{ height: '45px' }} >RM Garden <span className="sale">sale</span> </h5>
            <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
            <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
          </div>
        </div>

      </div>
      <div className="col-md-4 col-sm-12 g-5">

        <div id="cardStyle" className="card shadow m-0 m-auto" style={{ width: "18rem" }}>
          <div className="">
            <img style={{ height: '200px' }} src={img3} className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <h5 style={{ height: '45px' }} >RM Garden <span className="sale">sale</span> </h5>
            <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
            <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RecentlyAdded;