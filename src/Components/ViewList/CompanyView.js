import React, { useEffect, useState } from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import User from "../../Assets/user.svg";
import View_Edit_Deactivate from "../DialogsBoxes/View_Edit_Deactivate";
import { BootstrapTooltip } from "../Accessories/Tooltip";
import CompanyDetailDialog from "../DialogsBoxes/CompanyDetailDialog";
import { globalUseStyles } from "../../GlobalCss";
import { COMPANYNAME } from "../../Constant/Constant";
import ContactProjectDialog from "../DialogsBoxes/ContactProjectDialog";
const CompanyView = ({ data }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Box sx={globalUseStyles.boxDesign}>
        <Grid container rowSpacing={1}>
          <Grid item lg={2.5} sx={{ cursor: "pointer" }}>
            <CompanyDetailDialog
              dataID={data.id !== null ? data.id : ""}
              data={data}
            />
          </Grid>
          <Grid item lg={2.5}>
            <Box>
              <Typography sx={globalUseStyles.typosubheadingdesign}>
                Email
              </Typography>
              <Typography sx={globalUseStyles.blackheading}>
                {data.email !== "" || data.email !== null
                  ? data.email
                  : "Not Available"}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1.5}>
            <Box>
              <Typography sx={globalUseStyles.typosubheadingdesign}>
                Phone
              </Typography>
              <Typography sx={globalUseStyles.blackheading}>
                {data.mobile !== "" || data.mobile !== null
                  ? data.mobile
                  : "Not Available"}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={1}>
              <ContactProjectDialog
                companyName={data.name !== undefined ? data.name : ""}
                type="Contact"
              />
              <Typography
                sx={globalUseStyles.typosubheadingdesign}
                style={globalUseStyles.FS16}
              >
                Contacts:
              </Typography>
              <Typography sx={globalUseStyles.blackheading}>
                {data.get_contacts_count !== "" ||
                data.get_contacts_count !== null
                  ? data.get_contacts_count
                  : 0}
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={1.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={1}>
              <ContactProjectDialog
                companyName={data.id !== undefined ? data.id : ""}
                type="Project"
              />

              <Typography
                sx={globalUseStyles.typosubheadingdesign}
                style={globalUseStyles.FS16}
              >
                Projects:
              </Typography>
              <Typography sx={globalUseStyles.blackheading}>
                {" "}
                {data.get_projects_count !== "" ||
                data.get_projects_count !== null
                  ? data.get_projects_count
                  : 0}
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={1.5} sx={globalUseStyles.MT10}>
            <Stack direction="row" spacing={10}>
              <BootstrapTooltip
                sx={{ width: "110px", textAlign: "center" }}
                title="Primary Contact : Ankit patil"
              >
                <img src={User} alt="user" />
              </BootstrapTooltip>
              <View_Edit_Deactivate
                type={COMPANYNAME}
                dataID={data.id !== null ? data.id : ""}
                data={data}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyView;
