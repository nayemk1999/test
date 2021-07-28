import React from 'react';
import './Properties.css';
import PropertyCard from './PropertyCard';

const properties = [
    {
        img: 'https://i.ibb.co/5YtR1KS/1-1.jpg',
        title: 'Garden With House'
    },
    {
        img: 'https://i.ibb.co/kxKkGjD/1-2.jpg',
        title: 'Office'
    },
    {
        img: 'https://i.ibb.co/zPhHD6n/1-3.jpg',
        title: 'Pool With House'
    },
    {
        img: 'https://i.ibb.co/tC2Nc3x/1-4.jpg',
        title: 'Building Interior'
    },
    {
        img: 'https://i.ibb.co/rMtm13p/1-5.jpg',
        title: 'Restaurant'
    },
    {
        img: 'https://i.ibb.co/VVmnYrr/1-6.jpg',
        title: 'Black House'
    }
]

const Properties = () => {

    return (
        <div className='mt-5 container' id='buy'>
            <h1 className='mb-3 mt-5 py-2 text-center bg-light'>Best Properties and Buildings</h1>
            <div className="property-container">
                {
                    properties.map((pprt, index) => <PropertyCard img={pprt.img} title={pprt.title} key={index} index={index} />)
                }
            </div>
        </div>
    );
};

export default Properties;