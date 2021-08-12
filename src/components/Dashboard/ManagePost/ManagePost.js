import React from 'react';
import { useForm } from 'react-hook-form';

const ManagePost = () => {
 

    return (
        <div>
            <form>
                <div className="from-group mb-3">
                    <label htmlFor="email">Enter Email :</label>
                    {/* <input className="form-control" name='email' {...register("email")} /> */}
                </div>

                <button type="submit " className="btn btn-primary">Add Admin</button>
            </form>
        </div>
    );
};

export default ManagePost;