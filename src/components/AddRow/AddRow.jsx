import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";

import { makeStyles } from "@material-ui/styles";

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

const AddRow = () => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox className={classes.checkbox} />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          className={classes.textfield}
        />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          className={classes.textfield}
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
