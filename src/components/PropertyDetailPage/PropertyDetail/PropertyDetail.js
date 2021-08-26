import React from 'react';
import img from "../../../image/1 (1).jpg"
import img2 from "../../../image/1 (3).jpg"
import img3 from "../../../image/1 (2).jpg"
import "./PropertyDetail.css"
import { faBath, faBed, faBookmark, faCheck, faHeart, faLocationArrow, faSquare, faSquareRootAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const PropertyDetail = () => {
    const[propertyDetail,setPropertyDetail] = useState({})
    const { id } = useParams();

    useEffect(()=>{
       fetch(`https://toprakserver.herokuapp.com/property/single-property/${id}`) 
       .then(res => res.json())
            .then(data => {
                setPropertyDetail(data)
            })
    },[id])
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner custom-carousel-inner">
                    <div className="carousel-item active">
                        <img src={propertyDetail.image} className="d-block w-100" alt="..." />
                        <div className="searchInput">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={propertyDetail.image1} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={propertyDetail.image2} className="d-block w-100" alt="..." />

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
            <div className=" mt-3 d-flex mapVideo">
                <p className=" bg-success px-5"><a href="#"> Map</a></p>
                <p className="bg-success px-5"><a href="#"> Video</a></p>
                <a className="save" href="#"><FontAwesomeIcon icon={faBookmark} /></a>


            </div>
            <h3 className="mb-3">Price: {propertyDetail.price} ট</h3>
            <h5 className="mb-3"><FontAwesomeIcon icon={faLocationArrow} /> {propertyDetail.address}</h5>
            <div className="d-flex detail">
                <p><strong><FontAwesomeIcon icon={faBed} /> {propertyDetail.beds}</strong></p>
                <p><strong> <FontAwesomeIcon icon={faBath} /> {propertyDetail.bath}</strong></p>
                <p> <strong> <FontAwesomeIcon icon={faSquare} /> {propertyDetail.area}</strong> sqft</p>
            </div>
            <div className="description mt-3">
                <h2>{propertyDetail.name}</h2>
                <p> {propertyDetail.description}</p>
            </div>
            <div className="moreDetail mt-5">
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Type :</strong>{propertyDetail.type}</p>
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Added On :</strong>  17-05-20</p>
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Completion :</strong>  {propertyDetail.completion}</p>
            <p> <strong> <FontAwesomeIcon icon={faCheck} /> Purpose :</strong>  {propertyDetail.purpose}</p>
            </div>
            <div className="location mt-5">
            <h2>Location & Nearby</h2>
            <div className=" d-flex">
                <h3>{propertyDetail.nearestPlace}</h3>
            </div>
            </div>
        </div>
    );
};

export default PropertyDetail;