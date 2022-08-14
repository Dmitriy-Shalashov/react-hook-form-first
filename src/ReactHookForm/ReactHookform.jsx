import React from "react";
import { useForm } from "react-hook-form";

const ReactHookform = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="App">
      <h1>First React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            type="text"
            {...register("firstName", {
              required: "This value is required!",
              minLength: {
                value: 5,
                message: " value must have 5 words or more",
              },
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.firstName && (
            <p>{errors?.firstName?.message || "First Name: Error!"} </p>
          )}
        </div>

        <label>
          Last Name:
          <input
            type="text"
            {...register("lastName", {
              required: "This value is required!",
              minLength: {
                value: 5,
                message: " value must have more 5 words",
              },
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.lastName && (
            <p>{errors?.lastName?.message || "Last Name: Error!"} </p>
          )}
        </div>

        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};

export default ReactHookform;
