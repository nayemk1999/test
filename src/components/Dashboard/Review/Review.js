import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { UserContext } from './../../../App';


export default function Review() {
    const { register, handleSubmit } = useForm();
    const { loggedInUser } = useContext(UserContext);
    // const reviewdata =  'https://toprak-real.herokuapp.com/review-data'
    
    const onSubmit = data => {
        
        const newReview = {

            name: loggedInUser.name,
            message: data.message,
            email: loggedInUser.email,
            img:loggedInUser.photo,
        }
        console.log(newReview);
        const url = 'https://toprak-real.herokuapp.com/review-data'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => {
                
            })
    }
    return (
        <div>
            <h2 className="text-center mb-5">Give Feedback</h2>
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <label>Review*</label>
                <br />
                <textarea className="form-control" rows="4" required {...register("message")} />
                <br />
                <br />
                <input className='btn btn-outline-info form-control' type="submit" />
            </form>
        </div>
    )
}
