import React from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import { globalUseStyles } from "../../GlobalCss";
const NameCompanyView = ({ data, type }) => {
  return (
    <>
      <Box sx={globalUseStyles.boxDesign} style={{ width: "350px" }}>
        <Grid container rowSpacing={0}>
          <Grid item lg={12}>
            <Stack direction="row">
              {type === "Contact" ? (
                <>
                  <Avatar sx={{ bgcolor: "#6B62E2" }}>
                    {data !== undefined &&
                    data.name !== null &&
                    data.name !== ""
                      ? data.name.charAt(0).toUpperCase()
                      : "?"}
                  </Avatar>
                  <Box>
                    <Typography sx={globalUseStyles.typoheadingDesign}>
                      {(data ?? data.name !== "") && data.name !== null
                        ? data.name
                        : "NO Data Found"}
                    </Typography>
                    <Typography
                      sx={globalUseStyles.typosubheadingdesign}
                      style={{ marginLeft: "10px" }}
                    >
                      Country |
                      {data !== undefined &&
                      data.country !== "" &&
                      data.country !== null
                        ? data.country
                        : "No data found"}
                    </Typography>
                  </Box>
                </>
              ) : (
                <>
                  <Avatar sx={{ bgcolor: "#6B62E2" }}>
                    {data !== undefined &&
                    data.company !== null &&
                    data.company !== "" &&
                    data.company.name !== null
                      ? data.company.name.charAt(0).toUpperCase()
                      : "?"}
                  </Avatar>
                  <Box>
                    <Typography sx={globalUseStyles.typoheadingDesign}>
                      {data !== undefined &&
                      data.company !== null &&
                      data.company.name !== null
                        ? data.company.name
                        : "NO Data Found"}
                    </Typography>
                    <Typography
                      sx={globalUseStyles.typosubheadingdesign}
                      style={{ marginLeft: "10px" }}
                    >
                      Client |
                      {data !== undefined &&
                      data.client !== "" &&
                      data.client !== null
                        ? data.client.name
                        : "No data found"}
                    </Typography>
                  </Box>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NameCompanyView;
