import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Typography, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import AddComapnyIcon from "../../Assets/AddCompanyIcon.svg";
import AddContactIcon from "../../Assets/AddContactIcon.svg";
import AddProjectIcon from "../../Assets/AddProjectIcon.svg";
import DeactivateDialog from "../DialogsBoxes/DeactivateDialog";
import AddandNewDialog from "../DialogsBoxes/AddandNewDialog";

const typograpgystyle = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: " 40px",
  color: "#283138",
};

const btndesign = {
  padding: "16px 32px",
  gap: "8px",
  background: "#6B62E2",
  border: "1px solid #6B62E2",
  borderRadius: " 4px",
  color: "white",
  height: " 50px",
  "&:hover": {
    backgroundColor: "#6B62E2",
  },
};
const AddNewbutton = () => {
  const [modal, setModal] = useState(0);

  const handleMenuItem = (e) => {
    switch (e.target.id) {
      case "Add Company":
        setModal(1);
        break;
    }
  };

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10}>
          <Typography style={typograpgystyle}>Clients and projects</Typography>
        </Grid>
        <Grid item xs={2}>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={btndesign}
                  startIcon={<AddIcon />}
                  {...bindTrigger(popupState)}
                >
                  Add New
                </Button>
                <Menu
                  {...bindMenu(popupState)}
                  onClick={(e) => handleMenuItem(e)}
                  sx={{ width: "250px" }}
                >
                  <MenuItem id="Add Company" sx={{ width: "250px" }}>
                    <img src={AddComapnyIcon} id="Add Company" />
                    <div style={{ marginLeft: "10px" }} id="Add Company">
                      Add Company
                    </div>
                    {modal === 1 ? <AddandNewDialog state={setModal} /> : ""}
                  </MenuItem>
                  <Divider />
                  <MenuItem id="Add Contact">
                    <img src={AddContactIcon} id="Add Contact" />
                    <div style={{ marginLeft: "10px" }} id="Add Contact">
                      Add Contact
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem id="Add Projects">
                    <img src={AddProjectIcon} id="Add Projects" />
                    <div style={{ marginLeft: "10px" }} id="Add Projects">
                      Add Projects
                    </div>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddNewbutton;
