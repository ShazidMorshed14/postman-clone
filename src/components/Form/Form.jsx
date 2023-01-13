import React from "react";
import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    width: 150,
    height: 40,
  },

  textfield: {
    width: "100%",
    background: "#F6F6F6",
    fontWeight: ["400", "!important"],
  },
  button: {
    marginLeft: [5, "!important"],
    width: 100,
    height: 40,
    background: ["#F26B3A", "!important"],
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Select
        //value={age}
        label="POST"
        //onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"GET"}>GET</MenuItem>
      </Select>
      <TextField className={classes.textfield} size="small" />
      <Button variant="contained" className={classes.button}>
        Send
      </Button>
    </Box>
  );
};

export default Form;
