import React from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import './OurPartner.css'
const partner = [
    {
        img: 'https://i.ibb.co/qd5PBcc/bkash.png',
    },
    {
        img: 'https://i.ibb.co/Wg1XLsw/city-bank.png',
    },
    {
        img: 'https://i.ibb.co/HFn7L7b/master-card.png',
    },
    {
        img: 'https://i.ibb.co/XyJxC5y/paypal.png',
    },
    {
        img: 'https://i.ibb.co/dmZ93Jy/rocket.png',
    },
    {
        img: 'https://i.ibb.co/n6R5q0P/visa-card.png',
    }
]
const OurPartner = () => {
    const settings = {
        dots: true,
        //   infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
            <h1 className='mb-5 mt-5 text-center'>Our Partner</h1>
            <Slider {...settings}>
                {partner.length &&
                    partner.map(propsData =>
                        <div className="d-flex justify-content-center align-items-center">
                        <Image style={{ maxWidth: "140px", maxHeight: '80px', border:'1px solid #17a2b8', padding:'5px' }} src={propsData.img} roundedCircle />
                    </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default OurPartner;