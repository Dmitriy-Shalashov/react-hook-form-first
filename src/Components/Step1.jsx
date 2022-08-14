import React from "react";
import { Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";

import MainContainer from "./MainContainer";
import Form from "./Form";
// import Input from "./Input";

function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 1
      </Typography>
      <Form>
        <input {...register("firstName")} />
        {/* <Input
           ref={...register("firstName")}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
        /> */}
      </Form>
    </MainContainer>
  );
}

export default Step1;
