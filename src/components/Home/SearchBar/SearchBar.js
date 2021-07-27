import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import { useForm } from "react-hook-form";
export default function SearchBar() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [allDivisionbn, setAllDivisionbn] = useState([])

    useEffect(() => {
        fetch('https://bdapis.herokuapp.com/api/v1.1/divisions')
            .then(res => res.json())
            .then(data => setAllDivisionbn(data.data))
    }, [])
    allDivisionbn.forEach(function (value) {
        const op = document.createElement('option')
        op.innerText = value.divisionbn;
        op.setAttribute('value', value._id);
        document.getElementById('বিভাগ').appendChild(op)
    })
    return (
        <div class="search-container " aria-label="Mini form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="d-flex">
                    <select {...register("বিভাগ")} id='বিভাগ' className="form-select me-2" aria-label="Default select example">
                        <option selected>বিভাগ</option>
                    </select>
                    <select {...register("জেলা")} id='জেলা' className="form-select me-2" aria-label="Default select example">
                        <option selected>জেলা</option>
                    </select>
                    <select {...register("থানা")} id='থানা' className="form-select me-2" aria-label="Default select example">
                        <option selected>থানা</option>
                    </select>
                    <button class="btn btn-outline-success" type="submit">Find</button>
                </div>
                <div className='d-flex mt-3'>
                    <select {...register("apartment")} className="form-select me-2" aria-label="Default select example">
                        <option selected>Apartment</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select {...register("price")} class="form-select me-2" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select {...register("beds")} class="form-select me-2" aria-label="Default select example">
                        <option selected>Beds</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
