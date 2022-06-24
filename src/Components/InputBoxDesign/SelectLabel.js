import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
const SelectLabel = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <label style={labelStyle}>Company</label>
      <Box sx={boxDesign}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            placeholder="Data"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectLabel;
