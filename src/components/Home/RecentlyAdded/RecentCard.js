import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import timeIcon from "../../../image/clock.svg";
import locationIcon from "../../../image/map-pin.svg";

const RecentCard = (props) => {
  const { division, name, image, district, _id, description } = props.propsData;

  return (
    //  //<div className="col-md-4 g-5" id='rent' >
    //             <Link to={'/property-detail/' + _id}>
    //                 <div class="card" style={{ width: "18rem" }}>
    //                     <img src={image} style={{ height: '200px' }} className="img-fluid" alt="..." />
    //                     <div class="card-body">
    //                         <div className='slide-info'>
    //                             <div className='slide-location'>
    //                                 <img src={locationIcon} alt="" />
    //                                 {district}
    //                             </div>
    //                         </div>
    //                         <div className='card-info'>
    //                             <h5 className=" text-center">{name}</h5>
    //                             <div className='slide-value'>
    //                                 <span style={{ fontSize: "1vw", fontWeight: "300" }}>Posted By</span>
    //                                 <div>
    //                                     <FontAwesomeIcon style={{ color: 'rgb(10, 158, 136)' }} icon={faUser} /> {'Admin'}
    //                                 </div>
    //                             </div>
    //                         </div>

    //                     </div>
    //                 </div>
    //             </Link>
    //         </div>

    <div className="col-md-4 mt-5">
      <Link to={"/property-detail/" + _id}>
        <div className="card-sl" style={{ width: "20rem" }}>
          <div className="card-image">
            <img
              src={image}
              style={{ height: "300px" }}
              // className="img-fluid"
              alt=""
            />
          </div>

          <a className="card-action" href="#"></a>
          <div className="card-heading">{name}</div>
          <div className="card-text">{description}</div>
          <div className="card-text">$67,400</div>
          <a href="#" className="card-button">
            {" "}
            Explore
          </a>
        </div>
      </Link>
    </div>
  );
};

export default RecentCard;
