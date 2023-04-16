import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AddRow from "../AddRow/AddRow";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  tablecell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
});

const CreateTable = ({ text, data, setData }) => {
  const classes = useStyles();

  const [rows, addRows] = useState([0]);

  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table
        sx={{ minWidth: "100%", border: "1px solid rgba(224,224,224,1)" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablecell}></TableCell>
            <TableCell className={classes.tablecell}>Key</TableCell>
            <TableCell className={classes.tablecell}>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <AddRow
              rows={rows}
              addRows={addRows}
              rowId={index}
              data={data}
              setData={setData}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
