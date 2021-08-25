import React, { useState, useEffect } from 'react';
import "./RecentlyAdded.css";
import Slider from 'react-slick';
import RecentCard from './RecentCard';
import TableSpinner from '../../Spinner/Spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const RecentlyAdded = () => {
  const url = 'https://toprakserver.herokuapp.com/property/all-post'
  const [allPost, setAllPost] = useState([]);

  console.log(allPost);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPost(data))
  }, [])

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    className: "text-center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-5">Recently Added</h2>

      <div className="row mx-auto">
        {allPost.length ?
          allPost.slice(-6).map(propsData => <RecentCard key={propsData._id} propsData={propsData} />)
          : <TableSpinner />
        }
      </div>
         <div className="d-flex justify-content-center py-3 mt-3">
           <Link to="/shopPage" className="btn btn-info text-white text-uppercase px-4">View More <FontAwesomeIcon icon={faAngleRight}/><FontAwesomeIcon icon={faAngleRight}/></Link>
         </div>
    </div>
  );
};

export default RecentlyAdded;