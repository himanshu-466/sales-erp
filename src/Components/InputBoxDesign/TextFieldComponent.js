import React, { useState, useEffect } from "react";
import { TextField, Box, FormControl } from "@mui/material/";
import { globalUseStyles } from "../../GlobalCss";
import { useForm } from "react-hook-form";
import { margin } from "@mui/system";
const TextFieldComponent = (props) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm();

  const obj =
    props.defaultStateARray !== undefined && props.defaultStateARray !== ""
      ? props.defaultStateARray.reduce((acc, ele) => ele)
      : "";
  useEffect(() => {
    props.formData(obj);
  }, []);
  const getData = (e) => {
    props.formData({ ...props.previousData, [props.fieldkey]: e.target.value });
  };
  return (
    <>
      <FormControl>
        <label style={globalUseStyles.CommonlabelStyle}>{props.title}</label>
        <Box sx={globalUseStyles.CommonboxDesign} autoComplete="off">
          {props.fieldkey !== "email" ? (
            <TextField
              id="outlined-basic"
              placeholder={props.title}
              variant="outlined"
              autoFocus
              defaultValue={!props.defaultState ? props.defaultState : ""}
              sx={{ width: "100%" }}
              onChange={getData}
            />
          ) : (
            <>
              <TextField
                type="email"
                id="outlined-basic"
                placeholder={props.title}
                variant="outlined"
                defaultValue={!props.defaultState ? props.defaultState : ""}
                autoFocus
                sx={{ width: "100%" }}
                onChange={getData}
              />
            </>
          )}
        </Box>
      </FormControl>
    </>
  );
};

export default TextFieldComponent;
