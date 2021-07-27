import React from 'react';
import "./SellerForm.css"

const SellerForm = () => {
  const getNumber = () => {
  
  }
  return (
    <div className="mx-auto">
      <h3>Contact Seller</h3>
      <div className="phone mt-4">
        <button onClick={getNumber} className="getNumber btn btn-success">Get Phone Number</button>
        <p className="number">01771531336</p>
      </div>

    </div>
  );
};

export default SellerForm;