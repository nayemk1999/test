import { faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ShopPageCard = (props) => {
    const { name, image, _id, description, beds, bath, price } = props.propsData;

    return (
      <>
      <div className="col-xl-4 col-lg-6 col-md-6 mt-5">
        <Link to={"/property-detail/" + _id}>
          <div className="card-sl shope__custom__card" style={{ width: "20rem" }}
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
          >
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
            <div className="card-text d-flex align-items-center justify-content-between custom__hover">
            <div className="d-flex">
              <p style={{marginRight:"1rem"}}>
                <strong>
                 Beds: <FontAwesomeIcon icon={faBed} /> {beds}
                </strong>
              </p>
              <p>
                <strong>
                 Bath: <FontAwesomeIcon icon={faBath} /> {bath}
                </strong>
              </p>
            </div>

            <p> <strong>$ {price}</strong></p>
          </div>
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