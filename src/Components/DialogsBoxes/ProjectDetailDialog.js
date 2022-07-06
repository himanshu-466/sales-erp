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
const ProjectDetailDialog = ({ state, dataID, data }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const [ui, setUi] = React.useState(true);
  //   const [contactData, setContactData] = React.useState({});
  //   const [projectData, setProjectData] = React.useState({});

  const projectDataBYID = useSelector((state) => state.project.Value);

  const ProjectFilterData = projectDataBYID.filter((ele) => {
    return ele.id == dataID;
  });
  //   console.log(ProjectFilterData);
  const obj = ProjectFilterData.reduce((acc, ele) => ele);
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  //   console.log(keys);

  const arr = keys.slice(3, -1);
  arr.splice(7, 1);
  console.log(arr);

  //   console.log(values);
  //   console.log(ProjectFilterData[0].bde.user);

  //   const handleClickOpen = () => {
  //     let result;
  //     let projectresult;
  //     setOpen(true);
  //     async function fetchcontact() {
  //       result = await dispatch(CompanyContactSearch(companyFilterData[0].name));
  //       if (ProjectFilterData.length > 0) {
  //         projectresult = await dispatch(
  //           CompanyProjectSearch(ProjectFilterData[0].company.id)
  //         );
  //       }
  //       if (result) {
  //         if (projectresult) {
  //           setProjectData(projectresult);
  //         }
  //         setContactData(result);
  //         setUi(true);
  //       }
  //     }
  //     fetchcontact();
  //   };
  React.useEffect(() => {
    // handleClickOpen();
  }, []);
  const handleClose = async () => {
    setOpen(false);
    state(0);
  };
  return (
    <>
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
                <Grid item lg={3}>
                  <Stack direction="row" sx={{ width: "200px" }}>
                    <Avatar sx={globalUseStyles.colorPrimary}>N</Avatar>
                    <Box>
                      <Typography sx={globalUseStyles.typoheadingDesign}>
                        ISPECS
                      </Typography>
                      <Typography sx={globalUseStyles.typosubheadingdesign}>
                        Client | Darren
                      </Typography>
                    </Box>
                  </Stack>
                  <Box>
                    <Stack direction="row">
                      <Typography
                        sx={globalUseStyles.typosubheadingdesign}
                      ></Typography>{" "}
                      <Typography
                        sx={globalUseStyles.typosubheadingdesign}
                      ></Typography>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item lg={3}>
                  <Typography
                    sx={globalUseStyles.typosubheadingdesign}
                    style={globalUseStyles.FS16}
                  >
                    Developer alloted
                  </Typography>
                  <Typography
                    sx={globalUseStyles.blackheading}
                    style={globalUseStyles.FS16}
                  >
                    Developer alloted
                  </Typography>
                </Grid>
                <Grid item lg={3}>
                  <Typography
                    sx={globalUseStyles.typosubheadingdesign}
                    style={globalUseStyles.FS16}
                  >
                    Developer alloted
                  </Typography>
                  <Typography
                    sx={globalUseStyles.blackheading}
                    style={globalUseStyles.FS16}
                  >
                    Developer alloted
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </BootstrapDialogTitle>
          <Divider />
          <DialogContent>
            <Stack direction="row"></Stack>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </>
  );
};

export default ProjectDetailDialog;
