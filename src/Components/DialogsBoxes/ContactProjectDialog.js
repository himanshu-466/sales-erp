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
import Typography from "@mui/material/Typography";
import NameCompanyView from "../ViewContainers/NameCompanyView";
import Contacts from "../../Assets/Contacts.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  CompanyContactSearch,
  CompanyProjectSearch,
} from "../../Redux/Slices/CompanySlice";
import ProjectPurple from "../../Assets/ProjectPurple.svg";
import { CompareArrows } from "@material-ui/icons";
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

export default function ContactProjectDialog({ companyName, type }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [ui, setUi] = React.useState(false);
  const [response, setResponse] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
    const handleAsync = async () => {
      let result;
      if (type === "Contact") {
        result = await dispatch(CompanyContactSearch(companyName));
      } else if (type === "Project") {
        result = await dispatch(CompanyProjectSearch(companyName));
      }

      if (result) {
        setUi(true);
        setResponse(result);
      }
    };
    handleAsync();
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {}, [response]);
  return (
    <div>
      {type === "Contact" ? (
        <img src={Contacts} alt="Contacts" onClick={handleClickOpen} />
      ) : (
        <img
          src={ProjectPurple}
          alt="Projectimages"
          onClick={handleClickOpen}
        />
      )}

      {ui ? (
        <BootstrapDialog
          onClose={(_, reason) => {
            if (reason !== "backdropClick") {
              handleClose();
            }
          }}
          aria-labelledby="customized-dialog-title"
          open={open}
          disableEscapeKeyDown
          sx={{ display: "flex", justifyContent: "right" }}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            {type === "Contact" ? "Contacts" : "Projects"}
          </BootstrapDialogTitle>
          <DialogContent dividers>
            {type === "Contact" ? (
              Object.keys(response) !== 0 &&
              response.payload.results.length > 0 ? (
                response.payload.results.map((ele, id) => (
                  <NameCompanyView data={ele} type="Contact" key={id} />
                ))
              ) : (
                <NameCompanyView />
              )
            ) : Object.keys(response) !== 0 &&
              response.payload.results.length > 0 ? (
              response.payload.results.map((ele, id) => (
                <NameCompanyView data={ele} type="Project" key={id} />
              ))
            ) : (
              <NameCompanyView />
            )}
          </DialogContent>
          <DialogActions></DialogActions>
        </BootstrapDialog>
      ) : (
        ""
      )}
    </div>
  );
}
