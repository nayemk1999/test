import React from "react";
import Review from './Review';

const properties = [
  {
    img: 'https://i.ibb.co/5YtR1KS/1-1.jpg',
    Name: 'Sir Tanvir Hosain Fahim',
    review: "Excellent Service Excellent Service"
  },
  {
    img: 'https://i.ibb.co/kxKkGjD/1-2.jpg',
    Name: 'Sir Nayeem Khan',
    review: "Excellent Service Excellent Service"
  },
  {
    img: 'https://i.ibb.co/zPhHD6n/1-3.jpg',
    Name: 'Sir Mahmudul Hasan',
    review: "Excellent Service Excellent Service"
  },
  {
    img: 'https://i.ibb.co/kxKkGjD/1-2.jpg',
    Name: 'Sir Badhan Chandra',
    review: " Excellent Service Excellent Service "
  }
]

export default function UserReview() {
  return (
    <div className="mt-5">
      <h2 className='text-center mt-5 h1Style'>Client  <span style={{ color: "#61dfed" }}>Feedback</span></h2>

      <div className="row mt-5" style={{ width: "80%", margin: "0 auto" }}>
        {
          properties.map(review => <Review review={review}></Review>)
        }
      </div>
    </div>
  );
}
