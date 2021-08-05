import React from 'react';
import "./PropertyDetailPage.css"
import Header from '../../Home/Header/Header/Header';
import PropertyDetail from '../PropertyDetail/PropertyDetail';
import SellerForm from '../SellerForm/SellerForm';

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
        </div>
    );
};

export default PropertyDetailPage;