import React, { useEffect, useState } from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import MessageIcon from "../../Assets/MessageIcon.svg";
import CallIcon from "../../Assets/Callicon.svg";
import View_Edit_Deactivate from "../DialogsBoxes/View_Edit_Deactivate";
import { globalUseStyles } from "../../GlobalCss";
import { CONTACTVIEW } from "../../Constant/Constant";

const ContactView = ({ data }) => {
  return (
    <>
      <Box sx={globalUseStyles.boxDesign}>
        <Grid container rowSpacing={0}>
          <Grid item lg={2.5}>
            <Stack direction="row">
              <Avatar sx={globalUseStyles.colorPrimary}>
                {data.name !== "" && data.name !== null
                  ? data.name.charAt(0).toUpperCase()
                  : "?"}
              </Avatar>

              <Box>
                <Typography sx={globalUseStyles.typoheadingDesign}>
                  {data.name !== "" && data.name !== null
                    ? data.name.charAt(0).toUpperCase() + data.name.slice(1)
                    : "Not Available"}
                </Typography>
                <Typography
                  sx={globalUseStyles.typosubheadingdesign}
                  style={globalUseStyles.MLTEN}
                >
                  {data.country !== "" || data.country !== null
                    ? data.country
                    : "Not Available"}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item lg={2}>
            <Box>
              <Typography sx={globalUseStyles.typosubheadingdesign}>
                Company
              </Typography>
              <Typography sx={globalUseStyles.blackheading}>
                {data.company !== null ? data.company.name : "Not Available"}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={1}>
              <img src={MessageIcon} alt="Contacts" />
              <Typography
                sx={globalUseStyles.blackheading}
                style={globalUseStyles.FS16}
              >
                {data.email !== "" || data.email !== null
                  ? data.email
                  : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={2.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={1}>
              <img src={CallIcon} alt="Projectimages" />
              <Typography
                sx={globalUseStyles.blackheading}
                style={globalUseStyles.FS16}
              >
                {data.mobile !== "" || data.mobile !== null
                  ? data.mobile
                  : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={1} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={10}>
              <div></div>
              <View_Edit_Deactivate
                type={CONTACTVIEW}
                dataID={data.id !== null ? data.id : ""}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactView;
