import React from "react";
import "./PropertyDetailPage.css";
import Header from "../../Home/Header/Header/Header";
import PropertyDetail from "../PropertyDetail/PropertyDetail";
import SellerForm from "../SellerForm/SellerForm";
import Footer from "../../Home/Footer/Footer";

const PropertyDetailPage = () => {
  return (
    <div>
      <Header />
      <div className="container propertyDetailPage">
        <div className="row">
          <div className="col-xl-7 col-lg-12 mb-xl-0 mb-5">
            <PropertyDetail />
          </div>
          <div className="col-xl-5 col-lg-12 mb-xl-0 mb-5 seller">
            <SellerForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
