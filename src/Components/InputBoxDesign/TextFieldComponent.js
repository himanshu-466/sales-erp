import React from "react";
import { TextField, Box } from "@mui/material/";

const labelStyle = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "12px",
  color: "#777E86",
  margin: "0 10px",
};
const boxDesign = {
  minWidth: 250,
  margin: "5px 10px",
  height: "30px",
};
const TextFieldComponent = () => {
  return (
    <>
      <label style={labelStyle}>Company</label>
      <Box component="form" sx={boxDesign} autoComplete="off">
        <TextField
          id="outlined-basic"
          placeholder="Data"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Box>
    </>
  );
};

export default TextFieldComponent;
