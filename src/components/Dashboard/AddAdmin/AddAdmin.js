import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./Addadmin.css";
const AddAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newEmail = {
      email: data.email,
    };
    const url = "https://toprakserver.herokuapp.com/admin/add-admin";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    })
      .then((res) => res.json())
      // .then(res => {
      //     // reset()
      //     return swal("Successfully add admin!", "Welcome.", { dangerMode: true });
      // })
      .then((data) => console.log(data));
  };
  return (
    <section className="form">
      <div className="formContainer">
        <h1 className="text-white text-center mb-5">Add new admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="from-group mb-3">
            <label htmlFor="email">Enter Email :</label>

            <input
              className="form-control"
              name="email"
              {...register("email")}
            />
          </div>

          <button type="submit " className="form-button">
            Add Admin
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddAdmin;
