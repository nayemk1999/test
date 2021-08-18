import React from 'react';
import "./PropertyDetailPage.css"
import Header from '../../Home/Header/Header/Header';
import PropertyDetail from '../PropertyDetail/PropertyDetail';
import SellerForm from '../SellerForm/SellerForm';
import Footer from '../../Home/Footer/Footer';

const PropertyDetailPage = () => {
    return (
        <div>
            <Header/>
            <div className="container row mx-auto propertyDetailPage">
                <div className="col-md-7">
                    <PropertyDetail />
                </div>
                <div className=" col-md-5 seller">
                    <SellerForm/>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default PropertyDetailPage;