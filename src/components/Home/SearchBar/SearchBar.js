import React from 'react'
import './SearchBar.css'
import { useForm } from "react-hook-form";
export default function SearchBar() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div class="search-container " aria-label="Mini form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="d-flex">
                    <input {...register("location")} class="form-control me-2" type="search" placeholder="Location" aria-label="Search" />
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
