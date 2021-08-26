import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "./Review.css";
const Review = ({ review }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    // <div className="col-md-6 col-lg-4 item ">
    //   <div className="box bg-light p-3">
    //     <img
    //       style={{ height: "90px", width: "90px" }}
    //       className="rounded-circle text-center"
    //       src="https://i.ibb.co/7CzR0Dg/users.jpg" alt=''
    //     />
    //     <h5 className="name text-info">{review.name}</h5>
    //     {/* <p className="title">Musician</p> */}
    //     <p className="description">{review.message}</p>
    //     <div className="social">
    //       <a href="#">
    //         <i className="fa fa-facebook-official"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fa fa-twitter"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fa fa-instagram"></i>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <>
      <div class="col-md-6 col-lg-4 item"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="box">
          <p class="description">{review.message}</p>
        </div>
        <div class="author">
          <img
            src="https://i.ibb.co/7CzR0Dg/users.jpg"
            class="rounded-circle img-fluid"
          />
          <h5 class="name">{review.name}</h5>
          <p class="des">CEO of Company Inc.</p>
        </div>
      </div>
    </>
  );
};

export default Review;
