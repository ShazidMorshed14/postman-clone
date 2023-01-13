import { Box, TextareaAutosize, Typography } from "@mui/material";
import React from "react";

const textAreaStyle = {
  width: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  padding: 10,
  paddingLeft: 35,
  paddingTop: 10,
  borderColor: "#ccc",
  minHeight: 150,
};
const CreateJsonText = () => {
  return (
    <Box>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>
      <TextareaAutosize minRow={3} maxRow={5} style={textAreaStyle} />
    </Box>
  );
};

export default CreateJsonText;
