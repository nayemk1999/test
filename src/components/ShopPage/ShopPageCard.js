import React from 'react';
import { Link } from 'react-router-dom';

const ShopPageCard = (props) => {
    const { name, image, _id, description } = props.propsData;

    return (
      <>
      <div className="col-xl-4 col-lg-6 col-md-6 mt-5">
        <Link to={"/property-detail/" + _id}>
          <div className="card-sl shope__custom__card"
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           style={{ width: "20rem" }}>
            <div className="card-image custom_card">
              <img
                src={image}
                style={{ height: "250px" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <a className="card-action" href="#"></a>
            <div className="card-heading">{name}</div>
            <div className="card-text">{description}</div>
            <div className="card-text">$67,400</div>
            <a href="#" className="card-button">
              Explore
            </a>
          </div>
        </Link>
      </div>
      </>
    );
};

export default ShopPageCard;