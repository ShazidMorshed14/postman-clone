import React from "react";
import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

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
  const { formData, setFormData } = useContext(DataContext);

  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const handleUrlChange = (e) => {
    setFormData({ ...formData, url: e.target.value });
  };

  return (
    <Box className={classes.component}>
      <Select
        value={formData.type}
        label="POST"
        onChange={(e) => handleTypeChange(e)}
        className={classes.select}
      >
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"GET"}>GET</MenuItem>
      </Select>
      <TextField
        className={classes.textfield}
        size="small"
        onChange={(e) => handleUrlChange(e)}
      />
      <Button variant="contained" className={classes.button}>
        Send
      </Button>
    </Box>
  );
};

export default Form;
