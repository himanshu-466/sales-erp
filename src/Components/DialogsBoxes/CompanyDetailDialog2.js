import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Grid,
  Stack,
  Divider,
  Box,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { globalUseStyles } from "../../GlobalCss";
import MessageIcon from "../../Assets/MessageIcon.svg";
import CallIcon from "../../Assets/Callicon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  CompanyContactSearch,
  CompanyProjectSearch,
} from "../../Redux/Slices/CompanySlice";
import CommonContactProject from "../ViewContainers/CommonContactProject";
import More from "../../Assets/More.svg";
import CommonContactProject2 from "../ViewContainers/CommonContactProject2";
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
const CompanyDetailDialog2 = ({ state, dataID }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const [ui, setUi] = React.useState(true);
  const [contactData, setContactData] = React.useState({});
  const [projectData, setProjectData] = React.useState({});
  const companyDataBYID = useSelector((state) => state.company.Value);
  const projectDataBYID = useSelector((state) => state.project.Value);
  const companyFilterData = companyDataBYID.filter((ele) => ele.id === dataID);
  const ProjectFilterData = projectDataBYID.filter((ele) => {
    if (ele.company) {
      return ele.company.id == dataID;
    }
  });

  const handleClickOpen = () => {
    let result;
    let projectresult;
    setOpen(true);
    async function fetchcontact() {
      result = await dispatch(CompanyContactSearch(companyFilterData[0].name));
      if (ProjectFilterData.length > 0) {
        projectresult = await dispatch(
          CompanyProjectSearch(ProjectFilterData[0].company.id)
        );
      }
      if (result) {
        if (projectresult) {
          setProjectData(projectresult);
        }
        setContactData(result);
        setUi(true);
      }
    }
    fetchcontact();
  };
  React.useEffect(() => {
    handleClickOpen();
  }, []);
  const handleClose = async () => {
    setOpen(false);
    state(0);
  };
  return (
    <>
      {ui ? (
        <div>
          <BootstrapDialog
            onClose={(_, reason) => {
              if (reason !== "backdropClick") {
                handleClose();
              }
            }}
            aria-labelledby="customized-dialog-title"
            open={open}
            disableEscapeKeyDown
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              sx={{ color: "#283138", fontWeight: "500" }}
            >
              <Box
                sx={globalUseStyles.boxDesign}
                style={globalUseStyles.borderNone}
              >
                <Grid container rowSpacing={1}>
                  <Grid item lg={4}>
                    <Stack direction="row" sx={{ width: "200px" }}>
                      <Avatar sx={globalUseStyles.colorPrimary}>N</Avatar>
                      <Typography sx={globalUseStyles.typoheadingDesign}>
                        {companyFilterData[0].name}
                      </Typography>
                    </Stack>
                    <Box>
                      <Stack direction="row">
                        <Typography sx={globalUseStyles.typosubheadingdesign}>
                          {companyFilterData[0].country}
                        </Typography>{" "}
                        <Typography sx={globalUseStyles.typosubheadingdesign}>
                          {companyFilterData[0].gst}
                        </Typography>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item lg={4}>
                    <Stack direction="row" spacing={1}>
                      <img src={MessageIcon} alt="Contacts" />
                      <Typography
                        sx={globalUseStyles.blackheading}
                        style={globalUseStyles.FS16}
                      >
                        {companyFilterData[0].email}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item lg={4}>
                    <Stack direction="row" spacing={1}>
                      <img src={CallIcon} alt="Projectimages" />
                      <Typography
                        sx={globalUseStyles.blackheading}
                        style={globalUseStyles.FS16}
                      >
                        {companyFilterData[0].mobile}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </BootstrapDialogTitle>
            <Divider />
            <DialogContent>
              <div>
                <Accordion
                  sx={globalUseStyles.bolghadowNone}
                  defaultExpanded={true}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={globalUseStyles.FWBOLD}>
                      Contacts
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails>
                    {Object.keys(contactData) !== 0 &&
                    contactData.payload !== undefined &&
                    contactData.payload.results.length > 0 ? (
                      contactData.payload.results.map((items, id) => {
                        return (
                          <CommonContactProject dataResult={items} key={id} />
                        );
                      })
                    ) : (
                      <CommonContactProject />
                    )}
                  </AccordionDetails>
                </Accordion>
              </div>
              <Divider />
              <div>
                <Accordion sx={globalUseStyles.bolghadowNone}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Projects</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {Object.keys(projectData) !== 0 &&
                    projectData.payload &&
                    projectData.payload.results.length > 0 ? (
                      projectData.payload.results.map((items, id) => {
                        return (
                          <CommonContactProject2 dataResult={items} key={id} />
                        );
                      })
                    ) : (
                      <CommonContactProject2 />
                    )}
                  </AccordionDetails>
                </Accordion>
              </div>
            </DialogContent>
          </BootstrapDialog>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CompanyDetailDialog2;
