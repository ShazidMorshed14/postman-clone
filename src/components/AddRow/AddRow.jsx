import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";

import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  tablecell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
  checkbox: {
    padding: ["2px 5px", "!important"],
  },
  textfield: {
    width: "100%",
  },
});

const AddRow = ({ addRows, rowId, rows, data, setData }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleCheckBox = (e) => {
    if (!checked) {
      setChecked(true);
      addRows((oldRows) => [...oldRows, rowId]);
    } else {
      setChecked(false);
    }
  };

  const onTextChange = (e) => {
    //console.log(e.target.name, e.target.value);
    let result = data.filter((value) => value.id === rowId)[0];

    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    let index = data.findIndex((value) => value.id === rowId);

    if (index == -1) {
      setData((oldArray) => [...oldArray, result]);
    } else {
      let newArray = Object.assign([...data], {
        [index]: result,
      });

      setData(newArray);
    }

    console.log(data);
  };

  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox
          className={classes.checkbox}
          checked={checked}
          onChange={(e) => handleCheckBox(e)}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          className={classes.textfield}
          name="key"
          onChange={(e) => onTextChange(e)}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          className={classes.textfield}
          name="value"
          onChange={(e) => onTextChange(e)}
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
