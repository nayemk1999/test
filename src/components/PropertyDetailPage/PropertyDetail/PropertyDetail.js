import React from 'react';
import img from "../../../image/1 (1).jpg"
import img2 from "../../../image/1 (3).jpg"
import img3 from "../../../image/1 (2).jpg"
import "./PropertyDetail.css"
import { faBath, faBed, faBookmark, faCheck, faHeart, faLocationArrow, faSquare, faSquareRootAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PropertyDetail = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: "600px" }} src={img} className="d-block w-100" alt="..." />
                        <div className="searchInput">

                        </div>


                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "600px" }} src={img2} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "600px" }} src={img3} className="d-block w-100" alt="..." />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="mt-4 d-flex mapVideo">
                <p className=" bg-success"><a href="#"> Map</a></p>
                <p className="bg-success"><a href="#"> Video</a></p>
                <a className="save" href="#"><FontAwesomeIcon icon={faBookmark} /></a>


            </div>
            <h3 className="mb-3">Price: 12,65,9000 ট</h3>
            <h5 className="mb-3"><FontAwesomeIcon icon={faLocationArrow} /> {'41/12/b Zigatola, Dhaka'}</h5>
            <div className="d-flex detail">
                <p><strong><FontAwesomeIcon icon={faBed} /> {'Bed 3'}</strong></p>
                <p><strong> <FontAwesomeIcon icon={faBath} /> {' Bath 2'}</strong></p>
                <p> <strong> <FontAwesomeIcon icon={faSquare} /> {'Sqft 1290'}</strong></p>
            </div>
            <div className="description mt-3">
                <h2>Garden With House</h2>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab modi obcaecati reprehenderit fugiat, ipsum enim molestias pariatur aperiam ut veritatis beatae unde nulla itaque vero magni perferendis facere perspiciatis praesentium iure, nesciunt. <br /> Voluptatibus, vitae cumque. Sapiente perferendis sint quam illo omnis ipsa, voluptates rerum, a autem excepturi quaerat dolores vitae! Adipisci minus ratione voluptatum et doloribus eum suscipit optio accusamus dolor sint explicabo quod nihil tempora, tenetur sequi necessitatibus aliquid.</p>
            </div>
            <div className="moreDetail mt-5">
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Type :</strong>  Apartment/Flat</p>
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Added On :</strong>  17-05-20</p>
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Completion :</strong>  Complete</p>
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Purpose :</strong>  Sale</p>
            </div>
            <div className="location mt-5">
            <h2>Location & Nearby</h2>
            <div className=" d-flex">
                <p>School</p>
                <p>Restaurents</p>
            </div>
            </div>
        </div>
    );
};

export default PropertyDetail;