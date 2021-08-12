import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { useForm } from "react-hook-form";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const [allDivisionbn, setAllDivisionbn] = useState([]);
  const [district, setDistrict] = useState([]);
  const [selectId, setSelectId] = useState("");
  const [upazila, setupazila] = useState([]);

  const onSubmit = (data) => {
    alert("Thank You....Data Connected");
    console.log(data);
  };

  useEffect(() => {
    fetch("https://bdapis.herokuapp.com/api/v1.1/divisions")
      .then((res) => res.json())
      .then((data) => setAllDivisionbn(data.data));
  }, []);

  useEffect(() => {
    fetch("https://bdapis.herokuapp.com/api/v1.1/division/" + selectId)
      .then((res) => res.json())
      .then((data) => {
        setDistrict(data.data);
      });
  }, [selectId]);

  // const divisionChange = (e) => {
  //     // const select = allDivisionbn.find(id => e.target.value === id.division)

  //     setSelectId(select._id)
  // }

  const districtChange = (e) => {
    const select = district.find((id) => e.target.value === id.district);
    setupazila(select.upazilla);
  };
  return (
    <>
      <div class="search-container " aria-label="Mini form">
        <div class="input-group">
          <input
            type="search"
            class="form-control rounded search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-success ms-3">
            search
          </button>
        </div>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="d-flex">
            <select
              {...register("division")}
              onChange={(e) => setSelectId(e.target.value)}
              className="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>Division</option>
              {allDivisionbn.map((dv) => (
                <option key={dv._id}>{dv.division}</option>
              ))}
            </select>
            <select
              {...register("district")}
              onChange={districtChange}
              className="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>District</option>
              {district !== undefined &&
                district.map((dis) => (
                  <option key={dis._id}>{dis.district}</option>
                ))}
            </select>
            <select
              {...register("upazilla")}
              className="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>Upazilla</option>
              {selectId &&
                upazila.map((upa) => <option key={upa}>{upa}</option>)}
            </select>
            <button class="btn btn-outline-success" type="submit">
              Find
            </button>
          </div>
          <div className="d-flex mt-3">
            <select
              {...register("apartment")}
              className="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>Apartment</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              {...register("price")}
              class="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>Price</option>
              <option value="1">12,002,000</option>
              <option value="2">12,002,000</option>
              <option value="3">12,002,000</option>
            </select>
            <select
              {...register("beds")}
              class="form-select me-2"
              aria-label="Default select example"
            >
              <option selected>Beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}
