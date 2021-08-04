import React from 'react';
import "./RecentlyAdded.css";
import Slider from 'react-slick';
import RecentCard from './RecentCard';

const RecentlyAddedData = [

  //    const getPostdata =  'https://toprak-real.herokuapp.com/all-post'
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
  },
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
    <div className="row container mx-auto" id='rent'>
      <h2 className="text-center mt-5">Recently Added</h2>
      <Slider {...settings}>
        {RecentlyAddedData.length &&
          RecentlyAddedData.map(propsData => <RecentCard propsData={propsData} />)
        }
      </Slider>
    </div>
  );
};

export default RecentlyAdded;