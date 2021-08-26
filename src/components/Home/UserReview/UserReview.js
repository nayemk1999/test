import React, { useEffect, useState } from "react";

import Review from "./Review";

export default function UserReview() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://toprakserver.herokuapp.com/review/all-review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div class="testimonials-clean">
      <div class="container">
        <div class="intro"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2 class="text-center">Testimonials </h2>
          <p class="text-center">
            Our customers love us! Read what they have to say below. Aliquam sed
            justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p>
        </div>
        <div class="row people">
          {review.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
}
