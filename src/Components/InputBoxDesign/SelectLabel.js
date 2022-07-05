import React, { useEffect } from "react";
import {
  Typography,
  InputLabel,
  MenuItem,
  Box,
  Select,
  FormControl,
} from "@mui/material";
import { globalUseStyles } from "../../GlobalCss";

const SelectLabel = ({
  type,
  formData,
  title,
  previousData,
  fieldkey,
  listData,
  defaultState,
  defaultStateARray,
}) => {
  const [value, setValue] = React.useState(
    defaultState !== undefined && defaultState !== "" ? defaultState : ""
  );

  // console.log(Object.values(defaultStateARray));
  const obj =
    defaultStateARray !== undefined && defaultStateARray !== ""
      ? defaultStateARray.reduce((acc, ele) => ele)
      : "";

  const Keys = Object.keys(obj);
  const values = Object.values(obj).map((ele) =>
    ele !== null && ele.id !== undefined && ele.id !== null ? ele.id : ele
  );

  const merged = Keys.reduce(
    (obj, key, index) => ({ ...obj, [key]: values[index] }),
    {}
  );
  useEffect(() => {
    formData(merged);
  }, []);
  const handleChange = (e) => {
    setValue(e.target.value);
    formData({ ...previousData, [fieldkey]: e.target.value });
  };

  const GenderArray = ["male", "female", "other"];
  return (
    <>
      <label style={globalUseStyles.CommonlabelStyle}>{title}</label>
      <Box sx={globalUseStyles.CommonboxDesign}>
        <FormControl fullWidth>
          <Select
            displayEmpty
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}
          >
            <MenuItem disabled value="">
              <Typography sx={{ color: "#777E86" }}>{title}</Typography>
            </MenuItem>

            {fieldkey === "gender" ? (
              GenderArray.map((ele, id) => (
                <MenuItem value={ele.charAt(0)} key={id}>
                  {ele.charAt(0).toUpperCase() + ele.slice(1)}
                </MenuItem>
              ))
            ) : Boolean(listData) ? (
              listData !== undefined && listData !== null ? (
                listData.map((ele, id) => {
                  return (
                    <MenuItem
                      value={
                        ele.name !== undefined
                          ? ele.id
                          : ele.user !== undefined
                          ? ele.id
                          : ele.code !== undefined
                          ? ele.id
                          : ""
                      }
                      key={id}
                    >
                      {ele.name !== undefined
                        ? ele.name
                        : ele.user !== undefined
                        ? ele.user
                        : ele.code !== undefined
                        ? ele.code
                        : ""}
                    </MenuItem>
                  );
                })
              ) : (
                <MenuItem disable>Failed to load</MenuItem>
              )
            ) : (
              <MenuItem disable>Failed to load</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectLabel;
