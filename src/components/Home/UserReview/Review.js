import React from 'react';
import "./Review.css"
const Review = ({review}) => {
    return (
        <div className="col-md-3  p-4 mb-4 " >
        <div className="row shadow text-center review">
            <div className="col-md-3">
            <img style={{height:"70px",width:"70px" }} src={review.img} alt="" />
            </div>
            <div className="col-md-9">
            <h4>{review.Name}</h4>
            <h6 class=" mb-2 text-muted">Daraz</h6>
            </div>     
            <p className="">{review.review}</p>     
        </div>
       
    </div>
    );
};

export default Review;