import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

const Input = forwardRef((ref, props) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      margin="normal"
      fullWidth
      inputRef={ref}
    ></TextField>
  );
});

export default Input;
