import React from 'react';
import img from "../../../image/1 (1).jpg"
import img2 from "../../../image/1 (3).jpg"
import img3 from "../../../image/1 (2).jpg"
const PropertyDetail = () => {
    return (
        <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img style={{height:"450px"}} class="d-block w-100" src={img} alt="First slide" />
            </div>
            <div class="carousel-item">
                <img style={{height:"450px"}} class="d-block w-100" src={img2} alt="Second slide" />
            </div>
            <div class="carousel-item">
                <img style={{height:"450px"}} class="d-block w-100" src={img3} alt="Third slide" />
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>

        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>

  </div>
    );
};

export default PropertyDetail;