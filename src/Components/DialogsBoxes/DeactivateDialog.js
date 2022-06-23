import React from "react";
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
import WarningIcon from "../../Assets/WarningIcon.svg";
import { MergeTypeTwoTone } from "@material-ui/icons";
import { Stack } from "@mui/material";

const headingDesign = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "30px",
  textAlign: "center",
  color: "#283138",
  margin: "0px 100px ",
};
const cancelButtonDesign = {};

const DeactivateButtonDesign = {
  flexDirection: " row",
  justifyContent: "center",
  alignItems: "center",
  padding: " 20px 40px",
  gap: "8px",
  width: "200",
  height: "40px",
  background: "#6B62E2",
  border: "1px solid #6B62E2",
  borderRadius: "4px",
  color: "white",
  fontFamily: "DM Sans",
  fontStyle: " normal",
  fontWeight: " 500",
  fontSize: "10px",

  "&:hover": {
    background: "#6B62E2",
  },
};

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
const DeactivateDialog = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    props.state(0);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent sx={{ margin: "auto" }}>
          <img src={WarningIcon} />
        </DialogContent>
        <Typography sx={headingDesign}>Deactivate this company ?</Typography>
        <DialogActions sx={{ width: "100%", justifyContent: "center" }}>
          <Stack direction="row" spacing={2} sx={{ margin: "20px 0" }}>
            <Button
              autoFocus
              onClick={handleClose}
              sx={DeactivateButtonDesign}
              style={{
                background: "white",
                border: "1px solid #6B62E2",
                outline: "0",
                color: "#6B62E2",
              }}
            >
              Cancel
            </Button>
            <Button autoFocus onClick={handleClose} sx={DeactivateButtonDesign}>
              Deactivate
            </Button>
          </Stack>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default DeactivateDialog;
