import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import "./OurPartner.css";
import RightArrow from "../../../image/right-arrow.svg";
import LeftArrow from "../../../image/left-arrow.svg";
const partner = [
  {
    img: "https://i.ibb.co/qd5PBcc/bkash.png",
  },
  {
    img: "https://i.ibb.co/Wg1XLsw/city-bank.png",
  },
  {
    img: "https://i.ibb.co/HFn7L7b/master-card.png",
  },
  {
    img: "https://i.ibb.co/XyJxC5y/paypal.png",
  },
  {
    img: "https://i.ibb.co/dmZ93Jy/rocket.png",
  },
  {
    img: "https://i.ibb.co/n6R5q0P/visa-card.png",
  },
];

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={LeftArrow}
      className={className}
      style={{
        ...style,

        width: "4vw",
        height: "4vw",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={RightArrow}
      className={className}
      style={{
        ...style,

        width: "4vw",
        height: "4vw",
      }}
      onClick={onClick}
    />
  );
}

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
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-5 mb-5 container">
      <h1 className="mb-5 mt-5 text-center">Our Partner</h1>
      <Slider {...settings}>
        {partner.length &&
          partner.map((propsData) => (
            <div className="d-flex justify-content-center align-items-center partner-container">
              <Image
                style={{}}
                className="img"
                src={propsData.img}
                roundedCircle
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default OurPartner;
