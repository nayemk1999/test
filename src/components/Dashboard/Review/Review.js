import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { UserContext } from './../../../App';


export default function Review() {
    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();
    const { loggedInUser } = useContext(UserContext);
    // const reviewdata =  'https://toprak-real.herokuapp.com/review-data'

    const onSubmit = data => {
        const newReview = {
            name: data.name,
            message: data.message,
            email: loggedInUser.email,
            profiePicture: loggedInUser.profileUpdate || ''
        }
        const url = 'https://toprakserver.herokuapp.com/review/add-review'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => {
                swal(`Successfully review added `).then(ok => history.push('/dashboard/profile'));
            })
    }
    return (
        <div className="shadow-lg p-5">
            <h2 className="text-center mb-5">Give Feedback</h2>
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <label>Name*</label>
                <input {...register("name")} required className="form-control" type="text" placeholder='Please enter your name' />
                <label>Review*</label>
                <br />
                <textarea name='review' className="form-control" rows="4" required {...register("message")} />
                <br />
                <br />
                <input className='btn btn-outline-info form-control' type="submit" />
            </form>
        </div>
    )
}
