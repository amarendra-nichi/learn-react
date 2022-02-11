import React from "react";
import { useForm } from "react-hook-form";
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
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="form "
          >
            <input
              {...register("firstName", {
                required: "field is required",
                minLength: { value: 4, message: "min length is 4" },
              })}
              className="form-control mb-2"
              placeholder="first name"
            />
            <p>{errors.firstName?.message}</p>
            <input
              {...register("lastName", {
                required: true,
                minLength: 4,
              })}
              className="form-control mb-2"
              placeholder="last name"
            />
            <p>{errors.lastName?.message}</p>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
