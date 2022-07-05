import { Grid, Box, Stack, Typography, Avatar } from "@mui/material";
import More from "../../Assets/More.svg";
import React, { useEffect } from "react";
import { globalUseStyles } from "../../GlobalCss";
const CommonContactProject2 = ({ dataResult }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Box sx={globalUseStyles.boxDesign}>
            <Grid container rowSpacing={1}>
              <Grid item lg={4}>
                <Stack direction="row" sx={{ width: "200px" }}>
                  <Avatar sx={{ bgcolor: "#6B62E2" }}>
                    {dataResult !== undefined &&
                    dataResult.company !== undefined
                      ? dataResult.company.name.charAt(0).toUpperCase()
                      : "?"}
                  </Avatar>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      sx={globalUseStyles.typoheadingDesign}
                      style={{ fontSize: "14px" }}
                    >
                      {dataResult !== undefined &&
                      dataResult.company !== undefined
                        ? dataResult.company.name.charAt(0).toUpperCase() +
                          dataResult.company.name.slice(1)
                        : "Not Available"}
                    </Typography>
                    <Typography
                      sx={globalUseStyles.typosubheadingdesign}
                      style={{
                        marginLeft: "15px",
                        color: "black",
                      }}
                    >
                      <span style={globalUseStyles.typosubheadingdesign}>
                        Country :{" "}
                        {dataResult !== undefined &&
                        dataResult.company !== undefined
                          ? dataResult.company.country
                          : "Not Available"}
                      </span>{" "}
                    </Typography>
                  </Box>
                  <img src={More} />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CommonContactProject2;
