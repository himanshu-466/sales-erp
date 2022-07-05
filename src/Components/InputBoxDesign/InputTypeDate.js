import React, { useState } from "react";
import { Box } from "@mui/material/";
import { globalUseStyles } from "../../GlobalCss";
import { Height } from "@material-ui/icons";
// import "../../index.css";
const InputTypeDate = (props) => {
  const getData = (e) => {
    props.formData({ ...props.previousData, [props.fieldkey]: e.target.value });
  };
  return (
    <>
      <label style={globalUseStyles.CommonlabelStyle}>{props.title}</label>
      <Box autoComplete="off">
        <input
          type="date"
          id="outlined-basic"
          className="inputDesign"
          onChange={getData}
          defaultValue={
            props.defaultState !== undefined ? props.defaultState : ""
          }
        />
      </Box>
    </>
  );
};

export default InputTypeDate;
