import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "./Review.css";
const Review = ({ review }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (

    <div className="col-md-6 col-lg-4 item mb-3">
      <div className="box bg-light p-3">
        <img
          style={{ height: "90px", width: "90px" }}
          className="rounded-circle text-center"
          src="https://i.ibb.co/7CzR0Dg/users.jpg" alt=''
        />
        <h5 className="name text-info">{review.name}</h5>
        {/* <p className="title">Musician</p> */}
        <p className="description">{review.message}</p>
        <div className="social">
          <a href="#">
            <i className="fa fa-facebook-official"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
