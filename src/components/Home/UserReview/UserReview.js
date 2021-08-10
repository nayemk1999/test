import React, { useEffect,useState } from "react";


import Review from './Review';

export default function UserReview() {
const [review,setReview] = useState([])

  useEffect(() => {
    fetch("'https://toprakserver.herokuapp.com/review/all-review'")
    .then(res=>res.json())
    .then(data=> setReview(data))
  }, [])
  return (
    <div className="mt-5">
      <h2 className='text-center mt-5 h1Style'>Client  <span style={{ color: "#61dfed" }}>Feedback</span></h2>

      <div className="row mt-5" style={{ width: "80%", margin: "0 auto" }}>
        {
          review.map(review => <Review key={review._id} review={review}></Review>)
        }
      </div>
    </div>
  );
}
