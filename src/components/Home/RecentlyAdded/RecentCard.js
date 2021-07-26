import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import timeIcon from '../../../image/clock.svg';
import locationIcon from '../../../image/map-pin.svg';

const RecentCard = (props) => {
    const { title, img } = props.propsData;

    return (
        <div className='slide-container'>
            <Link to='/'>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={img} style={{ height: '200px' }} className="img-fluid" alt="..." />
                    <div class="card-body">
                        <div className='slide-info'>
                            <div className='slide-time'>
                                <img src={timeIcon} alt="" />
                                {(new Date().toDateString('dd/MM/yyyy'))}
                            </div>
                            <div className='slide-location'>
                                <img src={locationIcon} alt="" />
                                Dhaka
                            </div>
                        </div>
                        <div className='card-info'>
                            <h5 className="card-title">{title}</h5>
                            <div className='slide-value'>
                                <span style={{ fontSize: "1vw", fontWeight: "400" }}>Posted By</span>
                                <div>
                                    <FontAwesomeIcon style={{ color: 'rgb(10, 158, 136)' }} icon={faUser} /> {'Admin'}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecentCard;