import React from 'react';
import { useForm } from 'react-hook-form';




const ManagePost = () => {
 


    return (
        <div>
<<<<<<< HEAD
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="from-group mb-3">
                    <label htmlFor="email">Enter Email :</label>
                    <input className="form-control" name='email' {...register("email")} />
                </div>

                <button type="submit " className="btn btn-primary">Add Admin</button>
            </form>
=======
            <h3>Manage post</h3>
>>>>>>> 88ca1aa2739704c1081877e40e8706f1a1383021
        </div>
    );
};

export default ManagePost;