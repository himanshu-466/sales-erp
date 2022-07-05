import React, { useEffect, useState } from "react";
import { Typography, Button, Divider, Grid, Box, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddComapnyIcon from "../../Assets/AddCompanyIcon.svg";
import AddContactIcon from "../../Assets/AddContactIcon.svg";
import AddProjectIcon from "../../Assets/AddProjectIcon.svg";
import AddandEditDialog from "../DialogsBoxes/AddandEditDialog";
import Add_Ediit_company_dialog from "../DialogsBoxes/Add_Ediit_company_dialog";
import { globalUseStyles } from "../../GlobalCss";
import "./Add.css";
import { COMPANYNAME, CONTACTVIEW, PROJECT } from "../../Constant/Constant";
import { useSelector, useDispatch } from "react-redux";
import { GetFormData } from "../../Redux/Slices/FormDataSlice";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

const AddNewbutton = ({ tabType, tabHandle }) => {
  const [modal, setModal] = useState(0);

  const handleMenuItem = (e) => {
    switch (e.target.id) {
      case "Add Company":
        setModal(1);
        break;
      case "Add Contact":
        setModal(2);
        break;
      case "Add Projects":
        setModal(3);
        break;
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFormData());
  }, []);

  return (
    <Box sx={globalUseStyles.wdMt}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10}>
          <Typography style={globalUseStyles.typograpgystyle}>
            Clients and projects
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Popover>
            <PopoverTrigger>
              <Button sx={globalUseStyles.btndesign} startIcon={<AddIcon />}>
                Add New
              </Button>
            </PopoverTrigger>
            <PopoverContent
              onClick={(e) => handleMenuItem(e)}
              sx={globalUseStyles.popupOuterDesign}
            >
              <PopoverBody id="Add Company">
                <Stack direction="row" sx={globalUseStyles.PD10}>
                  <img src={AddComapnyIcon} id="Add Company" />
                  <div style={globalUseStyles.MLTEN} id="Add Company">
                    Add Company
                  </div>
                </Stack>
                <Divider />
                {modal === 1 ? (
                  <Add_Ediit_company_dialog
                    state={setModal}
                    headingName="Add Company"
                    buttonName="Add Company"
                    type={COMPANYNAME}
                  />
                ) : (
                  ""
                )}
              </PopoverBody>
              <Divider />
              <PopoverBody id="Add Contact">
                <Stack direction="row" sx={globalUseStyles.PD10}>
                  <img src={AddContactIcon} id="Add Contact" />
                  <div style={globalUseStyles.MLTEN} id="Add Contact">
                    Add Contact
                  </div>
                </Stack>
                {modal === 2 ? (
                  <Add_Ediit_company_dialog
                    state={setModal}
                    headingName="Add new contacts"
                    buttonName="Add Contact"
                    type={CONTACTVIEW}
                  />
                ) : (
                  ""
                )}
              </PopoverBody>
              <Divider />
              <PopoverBody id="Add Projects" sx={globalUseStyles.PD10}>
                <Stack direction="row">
                  <img src={AddProjectIcon} id="Add Projects" />
                  <div style={globalUseStyles.MLTEN} id="Add Projects">
                    Add Projects
                  </div>
                </Stack>
                {modal === 3 ? (
                  <AddandEditDialog
                    state={setModal}
                    headingName="Add new project"
                    buttonName="Add Project"
                  />
                ) : (
                  ""
                )}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddNewbutton;
