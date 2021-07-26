import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import PropertiesContent from './PropertiesContent';
import './Properties.css'

const properties = [
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
        img: 'https://i.ibb.co/tC2Nc3x/1-4.jpg',
        title: 'Building Interior'
    },
    {
        img: 'https://i.ibb.co/rMtm13p/1-5.jpg',
        title: 'Restaurant'
    },
    {
        img: 'https://i.ibb.co/VVmnYrr/1-6.jpg',
        title: 'Black House'
    },
    {
        img: 'https://i.ibb.co/VVmnYrr/1-6.jpg',
        title: 'Black House'
    },
    {
        img: 'https://i.ibb.co/VVmnYrr/1-6.jpg',
        title: 'Black House'
    },
]

const Properties = () => {
    // const [loading, setLoading]=useState(false)
    const settings = {
        dots: true,
        //   infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        className: "text-center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        speed: 500,
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
        <div className='mt-5 container'>
            <h1 className='mb-3 mt-5 text-center bg-light'>Best Properties and Buildings</h1>
            <Slider {...settings}>
                {properties.length &&
                    properties.map(propsData => <PropertiesContent propsData={propsData} />)
                }
            </Slider>
        </div>
    );
};

export default Properties;