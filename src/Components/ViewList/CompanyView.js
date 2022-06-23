import React from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import User from "../../Assets/user.svg";
import More from "../../Assets/More.svg";
import Contacts from "../../Assets/Contacts.svg";
import ProjectPurple from "../../Assets/ProjectPurple.svg";
import { DesignObj } from "./DesignObj";

const CompanyView = () => {
  return (
    <>
      <Box sx={DesignObj.boxDesign}>
        <Grid container rowSpacing={0}>
          <Grid item xs={2.5}>
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
              <img src={User} alt="user" />
              <img src={More} alt="More" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyView;
