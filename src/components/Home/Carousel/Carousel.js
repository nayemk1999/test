import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import "./Carousel.css";

const HeadCarousel = () => {
  const img1 = "https://i.ibb.co/pnGSnwZ/233999.jpg";
  const img2 = "https://i.ibb.co/kxKkGjD/1-2.jpg";
  const img3 = "https://i.ibb.co/Nx0bjDn/153056.jpg";
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active custom__slide__size">
          <img
            style={{ height: "600px" }}
            src={img1}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item custom__slide__size">
          <img
            style={{ height: "600px" }}
            src={img2}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item custom__slide__size">
          <img
            style={{ height: "600px" }}
            src={img3}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></>
                <span className="visually-hidden">Previous</>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></>
                <span className="visually-hidden">Next</>
            </button> */}
    </div>
  );
};

export default HeadCarousel;
