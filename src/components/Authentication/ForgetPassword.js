import React from 'react';
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    return (
        <div className="container">
            {/* <h2 className="text-center mt-2 text-success">Profile Update</h2> */}
            <div style={{ borderRadius: "20px" }} className="p-3 shadow-lg mt-1">
                {/* <Image className="d-flex justify-content-center mx-auto" style={{ maxWidth: "70px", border: '1px solid #17a2b8' }} src={loggedInUser.profilePicture} roundedCircle /> */}
                <form onSubmit="{handleSubmit(onSubmit)}">
                    <div className="row mt-4">
                        <div className="col-md-12 me-2">
                            <label htmlFor="email">Enter Your Email</label>
                            <input className="form-control" name='email' {...register("email", { required: true })} />
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-3 me-2">
                            <label htmlFor="new-password">New Password</label>
                            <input className="form-control" name='new-password' {...register("new-password", { required: true })}/>
                        </div>
                        <div className="col-md-4 me-2">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input className="form-control" name='confirm-password' {...register("confirm-password", { required: true })}/>
                        </div>
                    </div>

                    <div className="form-group text-center mt-4">
                        <button type="submit" className="btn btn-primary btn-lg submitButton"> Updated Password </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;