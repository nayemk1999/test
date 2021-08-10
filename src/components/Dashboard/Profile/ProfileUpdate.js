import { Popover } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import { Image, OverlayTrigger } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

export default function ProfileUpdate() {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = updateData => {
        const url = 'https://toprakserver.herokuapp.com/auth/register'
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => {
                if (res) {
                    // reset();
                    return swal(`Successfully Updated Your Profile`, "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
    };
    return (
        <div className="container">
            <h2 className="text-center mt-2 text-success">Profile Update</h2>
            <div style={{ borderRadius: "20px" }} className="p-5 shadow-lg mt-2">
                <Image className="d-flex justify-content-center mx-auto" style={{ maxWidth: "70px", border: '1px solid #17a2b8' }} src={loggedInUser.profilePicture} roundedCircle />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" defaultValue={loggedInUser.username} {...register("username", { required: true })} />
                    </div>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" defaultValue={loggedInUser.email} {...register("username", { required: true })} />
                    </div>
                    {/* <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" placeholder="Address added" />
                    </div> */}
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-lg submitButton"> Send Message </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
