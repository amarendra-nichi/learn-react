import React from "react";
import { useForm } from "react-hook-form";
import * as IoIcons from 'react-icons/io';
export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  console.log(errors);
  return (
    <>
        <div>
        <div class="row pb-3">
      <div className="col">
        <div class="d-flex align-items-center h4 mb-0">
        <span><IoIcons.IoMdPeople className="" /></span><span className="ml-1"> <label >CREATE USER</label></span>
        </div>
      </div>
    </div>
    <hr class="my-0 ml-3" />
        </div>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="form py-3 w-75"
          >
          <div className="row">
        <div className="col-md-6">
          <label className="text-left d-flex mb-2">FirstName</label>
            <input
              {...register("firstName", {
                required: "field is required",
                minLength: { value: 4, message: "min length is 4" },
              })}
              className="form-control mb-2"
              placeholder="first name"
            />
            <p>{errors.firstName?.message}</p>
            </div>
            <div className="col-md-6 mx-auto">
              <label className="text-left d-flex mb-2">LastName</label>
            <input
              {...register("lastName", {
                required: true,
                minLength: 4,
              })}
              className="form-control mb-2"
              placeholder="last name"
            />
            <p>{errors.lastName?.message}</p>

          
            </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <label className="text-left d-flex mb-2">Age</label>
            <input
              {...register("age", {
                required: "field is required",
                maxLength: { value: 2, message: "max length is 2" },
              })}
              className="form-control mb-2"
              placeholder="age"
            />
            <p>{errors.age?.message}</p>
            </div>
            <div className="col-md-6  text-left">
              <label className="text-left d-flex mb-2">MemberType</label>
            <input
              {...register("type", {
                required: true,
                minLength: 10,
              })}
              className="form-control mb-2"
              placeholder="member type"
            />
            <p>{errors.type?.message}</p>

          
            </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <label className="text-left d-flex mb-2">PhoneNo</label>
            <input
              {...register("phoneNo", {
                required: "field is required",
                maxLength: { value: 11, message: "max length is 11" },
              })}
              className="form-control mb-2"
              placeholder="phoneNo"
            />
            <p>{errors.phoneNo?.message}</p>
            </div>
            <div className="col-md-6  text-left">
              <label className="text-left d-flex mb-2">Address</label>
            <input
              {...register("Address", {
                required: true,
                minLength: 10,
              })}
              className="form-control mb-2"
              placeholder="Address"
            />
            <p>{errors.Address?.message}</p>

          
            </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="col d-flex justify-content-end">
        <button className="btn btn-primary d-flex justify-content-end  text-right">Submit</button>
        </div>
        </div>
      
           </form>
    </>
  );
}
