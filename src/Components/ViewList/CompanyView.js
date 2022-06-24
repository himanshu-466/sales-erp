import React, { useState } from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import User from "../../Assets/user.svg";
import Contacts from "../../Assets/Contacts.svg";
import ProjectPurple from "../../Assets/ProjectPurple.svg";
import { DesignObj } from "./DesignObj";
import View_Edit_Deactivate from "../DialogsBoxes/View_Edit_Deactivate";
import { BootstrapTooltip } from "../Accessories/Tooltip";
import CompanyDetailDialog from "../DialogsBoxes/CompanyDetailDialog";

const CompanyView = () => {
  const [modal, setModal] = useState(0);
  const openDialog = () => {
    console.log(modal);
    setModal(1);
  };
  return (
    <>
      <Box sx={DesignObj.boxDesign}>
        <Grid container rowSpacing={1}>
          <Grid item xs={2.5} sx={{ cursor: "pointer" }} onClick={openDialog}>
            <Stack direction="row">
              <Avatar sx={{ bgcolor: "#6B62E2" }}>N</Avatar>
              <Box>
                <Typography sx={DesignObj.typoheadingDesign}>
                  NewVision Technology
                </Typography>
                <Typography
                  sx={DesignObj.typosubheadingdesign}
                  style={{ marginLeft: "10px" }}
                >
                  India | Gst:3453454
                </Typography>
              </Box>
              {modal === 1 ? <CompanyDetailDialog state={setModal} /> : ""}
            </Stack>
          </Grid>
          <Grid item xs={1.5}>
            <Box>
              <Typography sx={DesignObj.typosubheadingdesign}>Email</Typography>
              <Typography sx={DesignObj.blackheading}>
                Info@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box>
              <Typography sx={DesignObj.typosubheadingdesign}>Phone</Typography>
              <Typography sx={DesignObj.blackheading}>+91-284234323</Typography>
            </Box>
          </Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={1}>
              <img src={Contacts} alt="Contacts" />
              <Typography
                sx={DesignObj.typosubheadingdesign}
                style={{ fontSize: "16px" }}
              >
                Contacts:
              </Typography>
              <Typography sx={DesignObj.blackheading}>7564</Typography>
            </Stack>
          </Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={1}>
              <img src={ProjectPurple} alt="Projectimages" />
              <Typography
                sx={DesignObj.typosubheadingdesign}
                style={{ fontSize: "16px" }}
              >
                Projects:
              </Typography>
              <Typography sx={DesignObj.blackheading}>7564</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={10}>
              <BootstrapTooltip
                sx={{ width: "110px", textAlign: "center" }}
                title="Primary Contact : Ankit patil"
              >
                <img src={User} alt="user" />
              </BootstrapTooltip>
              <View_Edit_Deactivate type="Company" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyView;
