import React from "react";
import { DesignObj } from "./DesignObj";
import More from "../../Assets/More.svg";
import Dollar from "../../Assets/Dollar.svg";
import InProgress from "../../Assets/InProgress.svg";
import Monthly from "../../Assets/Monthly.svg";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
const ProjectList = () => {
  return (
    <>
      <Box sx={DesignObj.boxDesign}>
        <Grid container rowSpacing={0}>
          <Grid item xs={2}>
            <Stack direction="row">
              <Avatar sx={{ bgcolor: "#6B62E2" }}>N</Avatar>
              <Box>
                <Typography sx={DesignObj.typoheadingDesign}>ISpecs</Typography>
                <Typography
                  sx={DesignObj.typosubheadingdesign}
                  style={{ marginLeft: "10px" }}
                >
                  Client : Darren
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
          <Grid item xs={2}>
            <Box>
              <Typography sx={DesignObj.typosubheadingdesign}>
                Developer
              </Typography>
              <Typography sx={DesignObj.blackheading}>
                Himanshu Agrawal
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={1}>
              <img src={Dollar} alt="Contacts" />
              <Typography
                sx={DesignObj.blackheading}
                style={{ fontSize: "16px" }}
              >
                120000:USD
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={1}>
              <img src={Monthly} alt="Projectimages" />
              <Typography
                sx={DesignObj.blackheading}
                style={{ fontSize: "16px" }}
              >
                Monthly
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={1}>
              <img src={InProgress} alt="Projectimages" />
              <Typography
                sx={DesignObj.blackheading}
                style={{ fontSize: "16px" }}
              >
                In-Progress
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={1.5} sx={{ marginTop: "10px" }}>
            <Stack direction="row" spacing={10}>
              <div></div>
              <img src={More} alt="More" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectList;
