import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ img, title, index }) => {
    return (

        <div className={`card-area card-${index}`}>
            <Link to='/detail'>
                <img src={img} alt={title} />
                <div className="content">
                    <h4 className="title">{title}</h4>
                </div>
            </Link>

        </div>


    );
};

export default PropertyCard;