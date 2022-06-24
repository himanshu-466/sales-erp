import React from "react";

const NameCompanyView = () => {
  return (
    <>
      <Box sx={DesignObj.boxDesign} style={{ border: "none" }}>
        <Grid container rowSpacing={0}>
          <Grid item xs={4}>
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
                  India | Gst:34534543
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={{ marginTop: "10px" }}>
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
          <Grid item xs={4} sx={{ marginTop: "10px" }}>
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
        </Grid>
      </Box>
    </>
  );
};

export default NameCompanyView;
