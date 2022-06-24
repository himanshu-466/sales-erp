import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Grid, Stack, Divider } from "@mui/material";
import { Box, Avatar } from "@mui/material";
import { DesignObj } from "../../Components/ViewList/DesignObj";
import MessageIcon from "../../Assets/MessageIcon.svg";
import CallIcon from "../../Assets/Callicon.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import More from "../../Assets/More.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const CompanyDetailDialog = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    props.state(0);
  };
  return (
    <>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            sx={{ color: "#283138", fontWeight: "500" }}
          >
            <Box sx={DesignObj.boxDesign} style={{ border: "none" }}>
              <Grid container rowSpacing={1}>
                <Grid item lg={4}>
                  <Stack direction="row" sx={{ width: "200px" }}>
                    <Avatar sx={{ bgcolor: "#6B62E2" }}>N</Avatar>
                    <Typography sx={DesignObj.typoheadingDesign}>
                      NewVision Technology
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item lg={4}>
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
                <Grid item lg={4}>
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
          </BootstrapDialogTitle>
          <Divider />
          <DialogContent>
            <div>
              <Accordion sx={{ boxShadow: "none" }} defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: "bold" }}>Contacts</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                  <Grid container rowSpacing={3}>
                    <Grid item lg={6}>
                      <Box sx={DesignObj.boxDesign}>
                        <Grid container rowSpacing={1}>
                          <Grid item lg={4}>
                            <Stack direction="row" sx={{ width: "200px" }}>
                              <Avatar sx={{ bgcolor: "#6B62E2" }}>N</Avatar>
                              <Box sx={{ width: "100%" }}>
                                <Typography
                                  sx={DesignObj.typoheadingDesign}
                                  style={{ fontSize: "14px" }}
                                >
                                  NewVision Technology
                                </Typography>
                                <Typography
                                  sx={DesignObj.typosubheadingdesign}
                                  style={{
                                    marginLeft: "15px",
                                    color: "black",
                                  }}
                                >
                                  <span style={DesignObj.typosubheadingdesign}>
                                    Country :
                                  </span>{" "}
                                  India
                                </Typography>
                              </Box>
                              <img src={More} />
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item lg={6}>
                      <Box sx={DesignObj.boxDesign}>
                        <Grid container rowSpacing={1}>
                          <Grid item lg={4}>
                            <Stack direction="row" sx={{ width: "200px" }}>
                              <Avatar sx={{ bgcolor: "#6B62E2" }}>N</Avatar>
                              <Box sx={{ width: "100%" }}>
                                <Typography
                                  sx={DesignObj.typoheadingDesign}
                                  style={{ fontSize: "14px" }}
                                >
                                  NewVision Technology
                                </Typography>
                                <Typography
                                  sx={DesignObj.typosubheadingdesign}
                                  style={{
                                    marginLeft: "15px",
                                    color: "black",
                                  }}
                                >
                                  <span style={DesignObj.typosubheadingdesign}>
                                    Country :
                                  </span>{" "}
                                  India
                                </Typography>
                              </Box>
                              <img src={More} />
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </div>
            <Divider />
            <div>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Projects</Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </>
  );
};

export default CompanyDetailDialog;
