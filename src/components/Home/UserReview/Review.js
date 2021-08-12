import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import "./Review.css"
const Review = ({review}) => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    return (
        <div className="col-md-3 p-4 mb-4 " >
        <div className="row shadow text-center review">
            <div className="col-md-3">
            <img style={{height:"70px",width:"70px" }} src={review.profilePicture || 'https://i.ibb.co/7CzR0Dg/users.jpg'} alt="" />
            </div>
            <div className="col-md-9">
            <h4>{review.name}</h4>
            <h6 class=" mb-2 text-muted">{review.email}</h6>
            </div>     
            <p className="">{review.message}</p>     
        </div>
       
    </div>
    );
};

export default Review;