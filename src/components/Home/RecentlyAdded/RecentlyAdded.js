import React, { useState, useEffect } from 'react';
import "./RecentlyAdded.css";
import Slider from 'react-slick';
import RecentCard from './RecentCard';





const RecentlyAdded = () => {
  const url = 'https://toprak-real.herokuapp.com/all-post'
  const [allPost, setAllPost] = useState([])

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
    <div className="row container mx-auto" >
      <h2 className="text-center mt-5">Recently Added</h2>
      
        <div id='rent' className="row">
        { allPost.length &&
          allPost.map(propsData => <RecentCard propsData={propsData} />)
        }
        </div>
  
    </div>
  );
};

export default RecentlyAdded;