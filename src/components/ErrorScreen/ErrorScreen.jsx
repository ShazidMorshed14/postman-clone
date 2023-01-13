import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import error from "../../images/postman-error.JPG";

const useStyles = makeStyles({
  error: {
    // objectFit: 'cover',
    width: "50%",
    height: "auto",
    objectPosition: "center 0%",
    margin: "auto",
  },
});

const ErrorScreen = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography mt={2} mb={2}>
        Response
      </Typography>
      <Box style={{ display: "flex" }}>
        <img src={error} alt="error" className={classes.error} />
      </Box>
    </Box>
  );
};

export default ErrorScreen;
