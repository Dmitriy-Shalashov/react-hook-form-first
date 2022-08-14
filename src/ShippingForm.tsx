import React, { FC } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { IShippingFields, IOption } from "./RedHookForm/app.interface";

const ShippingForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    //  watch,
    setValue,
    control,
  } = useForm<IShippingFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Enter your shipping info: </h1>
      <form action="">
        <div style={{ marginBottom: 12 }}>
          <input
            placeholder="email"
            {...register("email", {
              required: "Email is require field!",
              pattern: {
                value: /.+@.+\..+/i,
                message: "Please enter valid email",
              },
            })}
          />
          {errors?.email && <div style={{ color: "red" }}>{errors}</div>}
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
