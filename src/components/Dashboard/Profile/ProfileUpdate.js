import { Popover } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import { Image, OverlayTrigger } from 'react-bootstrap';
import { UserContext } from '../../../App';

export default function ProfileUpdate() {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [profile, setProfile] = useState({})
   
    return (
        <div className="container">
            <h2 className="text-center mt-2 text-success">Profile Update</h2>
            <div style={{ borderRadius: "20px" }} className="p-5 shadow-lg mt-2">
                <Image className="d-flex justify-content-center mx-auto" style={{ maxWidth: "70px", border: '1px solid #17a2b8' }} src={profile.photo} roundedCircle />

                <form onSubmit={''}>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" defaultValue={loggedInUser.name} />
                    </div>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" value={loggedInUser.email} />
                    </div>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" placeholder="Address added" />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-lg submitButton"> Send Message </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
