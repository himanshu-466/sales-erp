import React from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import { DesignObj } from "./DesignObj";
import MessageIcon from "../../Assets/MessageIcon.svg";
import CallIcon from "../../Assets/Callicon.svg";
import View_Edit_Deactivate from "../DialogsBoxes/View_Edit_Deactivate";

const ContactView = () => {
  return (
    <>
      <Box sx={DesignObj.boxDesign}>
        <Grid container rowSpacing={0}>
          <Grid item xs={2.5}>
            <Stack direction="row">
              <Avatar sx={{ bgcolor: "#6B62E2" }}>N</Avatar>
              <Box>
                <Typography sx={DesignObj.typoheadingDesign}>
                  Himanshu Agarwal
                </Typography>
                <Typography
                  sx={DesignObj.typosubheadingdesign}
                  style={{ marginLeft: "10px" }}
                >
                  India
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography sx={DesignObj.typosubheadingdesign}>
                Company
              </Typography>
              <Typography sx={DesignObj.blackheading}>
                NewVision Technology
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={1}>
              <img src={MessageIcon} alt="Contacts" />
              <Typography
                sx={DesignObj.blackheading}
                style={{ fontSize: "16px" }}
              >
                info@example.com
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={1}>
              <img src={CallIcon} alt="Projectimages" />
              <Typography
                sx={DesignObj.blackheading}
                style={{ fontSize: "16px" }}
              >
                +91-9482347238
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={10}>
              <div></div>
              <View_Edit_Deactivate type="Contact" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactView;
