import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import timeIcon from '../../../image/clock.svg';
import locationIcon from '../../../image/map-pin.svg';

const RecentCard = (props) => {
    const history = useHistory();
    const handleCard = id => {
        console.log(id);
        history.push(`/detail/${id}`)
    }
    const { name, image, district, date, _id } = props.propsData;

    return (
        <div onClick={() => handleCard(_id)} className="col-md-4 g-5" >

            <div class="card" style={{ width: "18rem" }}>
                <img src={image} style={{ height: '200px' }} className="img-fluid" alt="..." />
                <div class="card-body">
                    <div className='slide-info'>
                        <div className='slide-location'>
                            <img src={locationIcon} alt="" />
                            {district}
                        </div>
                    </div>
                    <div className='card-info'>
                        <h5 className=" text-center">{name}</h5>
                        <div className='slide-value'>
                            <span style={{ fontSize: "1vw", fontWeight: "300" }}>Posted By</span>
                            <div>
                                <FontAwesomeIcon style={{ color: 'rgb(10, 158, 136)' }} icon={faUser} /> {'Admin'}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RecentCard;