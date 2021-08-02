import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddAPost = () => {
    const { register, handleSubmit } = useForm();
    const [allDivisionbn, setAllDivisionbn] = useState([])
    const [district, setDistrict] = useState([])
    const [selectId, setSelectId] = useState('')
    const [upazila, setupazila] = useState([])

    const onSubmit = (data) => {
        console.log("Done", data.location)
    }

    useEffect(() => {
        fetch('https://bdapis.herokuapp.com/api/v1.1/divisions')
            .then(res => res.json())
            .then(data => setAllDivisionbn(data.data))
    }, [])

    useEffect(() => {
        fetch('https://bdapis.herokuapp.com/api/v1.1/division/' + selectId)
            .then(res => res.json())
            .then(data => {
                setDistrict(data.data)
            })
    }, [selectId])

    const districtChange = (e) => {
        const select = district.find(id => e.target.value === id.district)
        setupazila(select.upazilla)
    }
    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input {...register("name")} className="form-control" type="text" />
                
                <label>Description:</label>
                <textarea {...register("description")} className="form-control" rows="6" ></textarea>
                
                <label>Area:</label>
                <input {...register("area")} className="form-control" type="number" name="" id="" />

                <label>Image 1:</label>
                <input {...register("image-1")} className="form-control" type="file" name="" id="" />
                
                <label>Image 2:</label>
                <input {...register("image-2")} className="form-control" type="file" name="" id="" />
                
                <label>Image 3:</label>
                <input {...register("image-3")} className="form-control" type="file" name="" id="" />
                
                <label>Price:</label>
                <input {...register("location")} className="form-control" type="text" />
                
                <label>Address:</label>
                <input {...register("address")} className="form-control" type="text" />
                
                <div class="d-flex mt-4">
                    <select {...register("division")} onChange={(e) => setSelectId(e.target.value)} className="form-select me-2" aria-label="Default select example">
                        <option selected>Division</option>
                        {
                            allDivisionbn.map(dv => <option key={dv._id}>{dv.division}</option>)
                        }

                    </select>
                    <select {...register("district")} onChange={districtChange} className="form-select me-2" aria-label="Default select example">
                        <option selected>District</option>
                        {district !== undefined &&
                            district.map(dis => <option key={dis._id}>{dis.district}</option>)
                        }
                    </select>
                    <select {...register("upazilla")} className="form-select me-2" aria-label="Default select example">
                        <option selected>Upazilla</option>
                        {selectId &&
                            upazila.map(upa => <option key={upa}>{upa}</option>)
                        }
                    </select>

                </div>
                <div className="d-flex mt-4">
                    <select {...register("beds")} className="form-select me-2" aria-label="Default select example">
                        <option selected>Beds</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                    </select>
                    <select {...register("bath")} className="form-select me-2 " aria-label="Default select example">
                        <option selected>Bath</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                    </select>
                    <select {...register("type")} className="form-select me-2" aria-label="Default select example">
                        <option selected>Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Flat">Flat</option>
                        <option value="Land">Land</option>
                       
                    </select>
                </div>
                <div className="d-flex mt-4">
                    
                    <select {...register("purpose")} className="form-select me-2" aria-label="Default select example">
                        <option selected>Purpose</option>
                        <option value="Sale">Sale</option>
                        <option value="Rent">Rent</option>
                    
                    </select>
                    <select {...register("completion")} className="form-select me-2" aria-label="Default select example">
                        <option selected>Completion</option>
                        <option value="Complete">Complete</option>
                        <option value="Under-Construction">Under-Construction</option>
                        
                       
                    </select>
                    <input {...register("completion")} className="form-control" type="date" name="" id="" />
                </div>
               
                    
                
                <button class="btn btn-outline-success mt-4" type="submit">Post Now</button>
            </form>
        </div>
    );
};

export default AddAPost;