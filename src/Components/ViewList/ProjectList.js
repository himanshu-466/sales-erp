import React from "react";
import Dollar from "../../Assets/Dollar.svg";
import InProgress from "../../Assets/InProgress.svg";
import Monthly from "../../Assets/Monthly.svg";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import View_Edit_Deactivate from "../DialogsBoxes/View_Edit_Deactivate";
import { globalUseStyles } from "../../GlobalCss";
import { PROJECT } from "../../Constant/Constant";
const ProjectList = ({ data }) => {
  return (
    <>
      <Box sx={globalUseStyles.boxDesign}>
        <Grid container rowSpacing={0}>
          <Grid item lg={2}>
            <Stack direction="row">
              <Avatar sx={globalUseStyles.colorPrimary}>
                {data.company !== null
                  ? data.company.name !== "" && data.company.name !== null
                    ? data.company.name.charAt(0).toUpperCase()
                    : "?"
                  : "?"}
              </Avatar>
              <Box>
                <Typography sx={globalUseStyles.typoheadingDesign}>
                  {data.company !== null
                    ? data.company.name !== "" && data.company.name !== null
                      ? data.company.name.charAt(0).toUpperCase() +
                        data.company.name.slice(1)
                      : "Not Available"
                    : "Not Available"}
                </Typography>
                <Typography
                  sx={globalUseStyles.typosubheadingdesign}
                  style={globalUseStyles.MLTEN}
                >
                  Client :{" "}
                  {data.client
                    ? data.client.name !== null && data.client.name !== ""
                      ? data.client.name
                      : "Not Available"
                    : "Not Available"}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item lg={2}>
            <Box>
              <Typography sx={globalUseStyles.typosubheadingdesign}>
                Developer alloted
              </Typography>
              <Typography sx={globalUseStyles.blackheading}>
                {data.developer !== null || data.developer !== ""
                  ? data.developer
                  : "Not Available"}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={2}>
            <Box>
              <Typography sx={globalUseStyles.typosubheadingdesign}>
                Dev name for client
              </Typography>
              <Typography sx={globalUseStyles.blackheading}>
                {data.developer !== null || data.developer !== ""
                  ? data.developer
                  : "Not Available"}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={1}>
              <img src={Dollar} alt="Dollar" />
              <Typography
                sx={globalUseStyles.blackheading}
                style={globalUseStyles.FS16}
              >
                {data.cost !== null && data.cost !== ""
                  ? data.cost
                  : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={1.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={1}>
              <img src={Monthly} alt="Projectimages" />
              <Typography
                sx={globalUseStyles.blackheading}
                style={globalUseStyles.FS16}
              >
                {data.payment_term !== null || data.payment_term !== ""
                  ? data.payment_term === 1
                    ? "Monthly"
                    : data.payment_term === 2
                    ? "Weekly"
                    : "Manually"
                  : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={1.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={1}>
              <img src={InProgress} alt="Projectimages" />
              <Typography
                sx={globalUseStyles.blackheading}
                style={globalUseStyles.FS16}
              >
                {data.status !== null && data.status !== ""
                  ? data.status === 1
                    ? "Up-coming"
                    : data.status === 2
                    ? "In-Progress"
                    : "Completed"
                  : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={1.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={10}>
              <div></div>
              <View_Edit_Deactivate
                type={PROJECT}
                dataID={data.id !== null ? data.id : ""}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectList;
