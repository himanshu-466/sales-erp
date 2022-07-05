import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "../../Assets/WarningIcon.svg";
import { globalUseStyles } from "../../GlobalCss";
import { useDispatch } from "react-redux";
import { DeleteCompany, GetCompany } from "../../Redux/Slices/CompanySlice";
import { DeleteContact, GetContact } from "../../Redux/Slices/ContactSlice";
import { DeleteProject, GetProject } from "../../Redux/Slices/ProjectSlice";
import { GetFormData } from "../../Redux/Slices/FormDataSlice";
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
const DeactivateDialog = ({ state, headingName, uniqueData }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const updateUI = async () => {
    if (headingName === "company") {
      await dispatch(GetCompany(""));
      handleClose();
      await dispatch(GetFormData());
      await dispatch(GetContact(""));
      await dispatch(GetProject(""));
    } else if (headingName === "contact") {
      await dispatch(GetContact(""));
      handleClose();
      await dispatch(GetCompany(""));
      await dispatch(GetFormData());
      await dispatch(GetProject(""));
    } else {
      await dispatch(GetProject(""));
      handleClose();
      await dispatch(GetCompany(""));
      await dispatch(GetFormData());
      await dispatch(GetContact(""));
    }
  };

  const handleClose = () => {
    setOpen(false);
    state(0);
  };
  const onSumbit = async () => {
    if (headingName === "company") {
      await dispatch(DeleteCompany(uniqueData[0].id));
      await updateUI();
    } else if (headingName === "contact") {
      await dispatch(DeleteContact(uniqueData[0].id));
      await updateUI();
    } else if (headingName === "project") {
      await dispatch(DeleteProject(uniqueData[0].id));
      await updateUI();
    }
    handleClose();
  };
  return (
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
        ></BootstrapDialogTitle>
        <DialogContent sx={{ margin: "auto" }}>
          <img src={WarningIcon} />
        </DialogContent>
        <Typography sx={globalUseStyles.DeactivateheadingDesign}>
          Deactivate this {headingName} ?
        </Typography>
        <DialogActions sx={{ width: "100%", justifyContent: "center" }}>
          <Stack direction="row" spacing={2} sx={{ margin: "20px 0" }}>
            <Button
              autoFocus
              onClick={handleClose}
              sx={globalUseStyles.DeactivateButtonDesign}
              style={globalUseStyles.CancelBtn}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              autoFocus
              onClick={onSumbit}
              sx={globalUseStyles.DeactivateButtonDesign}
            >
              Deactivate
            </Button>
          </Stack>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default DeactivateDialog;
