import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontFamily: "orbitron",
    fontSize: "40px",
    color: "#757de8",
    textShadow: "1px 1px #002984",
  },
}));

function Header() {
  const styles = useStyles();
  return (
    <Typography className={styles.root} component="h1" variant="h5">
      React Hook Form
    </Typography>
  );
}

export default Header;
