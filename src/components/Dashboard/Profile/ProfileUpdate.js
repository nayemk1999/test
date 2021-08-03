import { Popover } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import { Image, OverlayTrigger } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

export default function ProfileUpdate() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [profile, setProfile] = useState({})

    const onSubmit = data => {
        const updateData = {
            name: data.name,
            id: loggedInUser._id,
            email: loggedInUser.email,
            address: data.address
        }
        const loading = toast.loading('Updating...Please wait!');
        const url = 'http://localhost:5004/profile-update'
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => {
                if (res) {
                    toast.dismiss(loading);
                    reset();
                    return swal(`Successfully updated ${loggedInUser.name}`, ` Thanks`);
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })

    };

    return (
        <div className="container">
            <h2 className="text-center mt-2 text-success">Profile Update</h2>
            <div style={{ borderRadius: "20px" }} className="p-5 shadow-lg mt-2">
                <Image className="d-flex justify-content-center mx-auto" style={{ maxWidth: "70px", border: '1px solid #17a2b8' }} src={profile.photo} roundedCircle />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" name='name' {...register("name", { required: true })} defaultValue={loggedInUser.name} />
                    </div>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" value={loggedInUser.email} />
                    </div>
                    <div className="form-group p-3">
                        <input required type="text" className="form-control p-3" name='address' placeholder="Address added" {...register("address")} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-lg submitButton"> Save </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
