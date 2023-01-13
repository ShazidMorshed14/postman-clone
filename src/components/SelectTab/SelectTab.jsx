import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import CreateTable from "../CreateTable/CreateTable";
import CreateJsonText from "../CreateJsonText/CreateJsonText";

const useStyles = makeStyles({
  component: {
    marginTop: 20,
  },
  tab: {
    textTransform: ["none", "!important"],
  },
});

const SelectTab = () => {
  const [value, setValue] = useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.component}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="none"
        TabIndicatorProps={{
          sx: {
            backgroundColor: "#F26B3A",
            height: 4,
            bottom: 2,
          },
        }}
      >
        <Tab label="Params" className={classes.tab} />
        <Tab label="Headers" className={classes.tab} />
        <Tab label="Body" className={classes.tab} />
      </Tabs>

      {/* Parmas box */}
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <CreateTable text={"Params"} />
      </Box>

      {/* Headers box */}
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable text={"Headers"} />
      </Box>

      {/* Body box */}
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        <CreateJsonText />
      </Box>
    </Box>
  );
};

export default SelectTab;
