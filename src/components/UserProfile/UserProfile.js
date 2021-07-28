import React, { useContext } from 'react';
import "./UserProfile.css"
import NavBar from '../Home/Header/NavBar/NavBar';
import { UserContext } from './../../App';

const UserProfile = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const { name, email, photo } = loggedInUser
    return (
        <div>
            <div className="">
                <NavBar />
            </div>
            <div className="container userProfile row mx-auto">
                <div className="col-md-6">
                    <img src={photo} alt="" />
                    <h5>Name :{name}</h5>
                    <h5>Email:{email}</h5>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;