import React from "react";
import Form from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import SelectTab from "../../components/SelectTab/SelectTab";
import Response from "../../components/Response/Response";
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen";

const useStyles = makeStyles({
  component: {
    width: "60%",
    margin: "20px auto",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Box className={classes.component}>
        <Form />
        <SelectTab />
        {/* <Response /> */}
        <ErrorScreen />
      </Box>
    </div>
  );
};

export default Home;
