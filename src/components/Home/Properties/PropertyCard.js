import React from 'react';

const PropertyCard = ({ img, title, index }) => {
    return (
        <div className={`card-area card-${index}`}>
            <img src={img} alt={title} />
            <div className="content">
                <h4 className="title">{title}</h4>
            </div>
        </div>
    );
};

export default PropertyCard;