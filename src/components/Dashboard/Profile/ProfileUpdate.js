import { Popover } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import { Image, OverlayTrigger } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

export default function ProfileUpdate() {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = updateData => {
        console.log(updateData);
        // const url = 'https://toprakserver.herokuapp.com/auth/register'
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'Application/json'
        //     },
        //     body: JSON.stringify(updateData)
        // })
        //     .then(res => {
        //         if (res) {
        //             // reset();
        //             return swal(`Successfully Updated Your Profile`, "success");
        //         }
        //         swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
        //     })
    };
    return (
        <div className="container">
            <h2 className="text-center mt-2 text-success">Profile Update</h2>
            <div style={{ borderRadius: "20px" }} className="p-5 shadow-lg mt-2">
                <Image className="d-flex justify-content-center mx-auto" style={{ maxWidth: "70px", border: '1px solid #17a2b8' }} src={loggedInUser.profilePicture} roundedCircle />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex mt-4">
                        <div className=" me-2">
                            <label htmlFor="username">Enter UserName :</label>
                            <input className="form-control" name='username' {...register("username")} defaultValue ={loggedInUser.username} />
                        </div>
                        <div className=" me-2">
                            <label htmlFor="email">Enter Email :</label>
                            <input className="form-control" name='email' {...register("email")} />
                        </div>
                        <div className=" me-2">
                            <label htmlFor="password">Enter Password :</label>
                            <input className="form-control" name='password' {...register("password")} />
                        </div>   
                    </div>

                    {/* <div className="d-flex mt-4">
                        <div className=" me-2">
                            <label htmlFor="email">Enter Email :</label>
                            <input className="form-control" name='email' {...register("email")} />
                        </div>
                        <div className=" me-2">
                            <label htmlFor="email">Enter Email :</label>
                            <input className="form-control" name='email' {...register("email")} />
                        </div>
                        <div className=" me-2">
                            <label htmlFor="email">Enter Email :</label>
                            <input className="form-control" name='email' {...register("email")} />
                        </div>   
                    </div>  */}
                    
                    <div className="form-group text-center mt-2">
                        <button type="submit" className="btn btn-primary btn-lg submitButton"> Updated Profile </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
