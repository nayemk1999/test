import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import timeIcon from "../../../image/clock.svg";
import locationIcon from "../../../image/map-pin.svg";
import './RecentlyAdded.css'

const RecentCard = (props) => {
  const { division, name, image, district, _id, description } = props.propsData;

  return (

    <div className="col-md-4 mt-5">
      <Link to={"/property-detail/" + _id}>
        <div className="card-sl" style={{ width: "20rem" }}>
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
  );
};

export default RecentCard;
