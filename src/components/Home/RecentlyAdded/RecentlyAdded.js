import React from 'react';
import "./RecentlyAdded.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'
const RecentlyAddedData = [
  {
    img: 'https://i.ibb.co/5YtR1KS/1-1.jpg',
    title: 'Garden With House'
  },
  {
    img: 'https://i.ibb.co/kxKkGjD/1-2.jpg',
    title: 'Office'
  },
  {
    img: 'https://i.ibb.co/zPhHD6n/1-3.jpg',
    title: 'Pool With House'
  }
]

const RecentlyAdded = () => {
  return (
    <div className="row container mx-auto">
      <h2 className="text-center mt-5">Recently Added</h2>
      {
        RecentlyAddedData.map(data =>
          <div className="col-md-4 col-sm-12 g-5">
            <div id="cardStyle" className="card shadow m-0 m-auto" style={{ width: "18rem" }}>
              <div className="">
                <img style={{ height: '200px' }} src={data.img} className="card-img-top" alt="" />
              </div>
              <div className="card-body">
                <h5 style={{ height: '45px' }} >{data.title} <span className="sale">sale</span> </h5>
                <span className="bg-success p-1 text-white apartment">APARTMENT/FLATS</span>
                <p className='mt-3'> <FontAwesomeIcon icon={faLocationArrow} /> Mirpur, Dhaka</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default RecentlyAdded;