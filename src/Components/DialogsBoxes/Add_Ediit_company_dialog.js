import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Typography,
  Grid,
  Stack,
  Divider,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";

import SelectLabel from "../InputBoxDesign/SelectLabel";
import TextFieldComponent from "../InputBoxDesign/TextFieldComponent";
import { useForm } from "react-hook-form";
import { globalUseStyles } from "../../GlobalCss";
import { COMPANYNAME, CONTACTVIEW, PROJECT } from "../../Constant/Constant";
import {
  GetContact,
  PostContact,
  UpdateContact,
} from "../../Redux/Slices/ContactSlice";

import { BASEURL } from "../../API/Url";
import { useSelector, useDispatch } from "react-redux";
import {
  GetCompany,
  PostCompany,
  UpdateCompany,
} from "../../Redux/Slices/CompanySlice";
import { stateManage } from "../../Redux/Slices/ApiStateSlice";
import { GetFormData } from "../../Redux/Slices/FormDataSlice";
import { GetProject } from "../../Redux/Slices/ProjectSlice";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
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

const Add_Ediit_company_dialog = ({
  state,
  headingName,
  buttonName,
  type,
  uniqueData,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [open, setOpen] = React.useState(true);

  const formListData = useSelector((state) => state.formdata.Value);
  const [formValue, setformValue] = React.useState({});
  const [upload, setUpload] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    state(0);
  };

  const updateUI = async () => {
    if (type === COMPANYNAME) {
      await dispatch(GetCompany(""));
      setUpload(false);
      handleClose();
      await dispatch(GetContact(""));
      await dispatch(GetFormData());
      await dispatch(GetProject(""));
    } else if (type === CONTACTVIEW) {
      await dispatch(GetContact(""));
      setUpload(false);
      handleClose();
      await dispatch(GetFormData());
      await dispatch(GetCompany(""));
      await dispatch(GetProject(""));
    }
  };
  const onSubmit = async () => {
    setUpload(true);
    if (type === CONTACTVIEW) {
      if (headingName === "Add new contacts") {
        await dispatch(PostContact(formValue));
        await updateUI();
      } else if (headingName === "Edit Contacts") {
        await dispatch(UpdateContact([uniqueData[0].id, formValue]));
        await updateUI();
      }
    } else if (type === COMPANYNAME) {
      if (headingName === "Add Company") {
        await dispatch(PostCompany(formValue));
        await updateUI();
      } else if (headingName === "Edit company details") {
        await dispatch(UpdateCompany([uniqueData[0].id, formValue]));
        await updateUI();
      }
    }
    handleClose();
  };

  return (
    <>
      <BootstrapDialog
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
        component="form"
        disableEscapeKeyDown
        onSubmit={handleSubmit(onSubmit)}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ color: "#283138", fontWeight: "500" }}
        >
          {headingName}
        </BootstrapDialogTitle>
        <Divider />
        <DialogContent>
          {upload ? (
            <CircularProgress color="primary" sx={globalUseStyles.center} />
          ) : (
            ""
          )}
          <Grid container rowSpacing={3}>
            <Grid item lg={6}>
              <TextFieldComponent
                formData={setformValue}
                title={
                  type === COMPANYNAME
                    ? "Company Name"
                    : type === CONTACTVIEW
                    ? "Full Name"
                    : ""
                }
                previousData={formValue}
                fieldkey={
                  type === COMPANYNAME
                    ? "name"
                    : type === CONTACTVIEW
                    ? "name"
                    : ""
                }
                defaultState={
                  type === COMPANYNAME
                    ? uniqueData !== undefined &&
                      uniqueData.length > 0 &&
                      uniqueData[0].name !== null
                      ? uniqueData[0].name
                      : ""
                    : uniqueData !== undefined &&
                      uniqueData.length > 0 &&
                      uniqueData[0].name !== null
                    ? uniqueData[0].name
                    : ""
                }
                defaultStateARray={
                  uniqueData !== undefined && uniqueData.length > 0
                    ? uniqueData
                    : ""
                }
              />
            </Grid>
            <Grid item lg={6}>
              <TextFieldComponent
                formData={setformValue}
                title={
                  type === COMPANYNAME
                    ? "Country"
                    : type === CONTACTVIEW
                    ? "Country"
                    : ""
                }
                previousData={formValue}
                fieldkey={
                  type === COMPANYNAME
                    ? "country"
                    : type === CONTACTVIEW
                    ? "country"
                    : ""
                }
                defaultState={
                  type === COMPANYNAME
                    ? uniqueData !== undefined &&
                      uniqueData.length > 0 &&
                      uniqueData[0].country !== null
                      ? uniqueData[0].country
                      : ""
                    : uniqueData !== undefined &&
                      uniqueData.length > 0 &&
                      uniqueData[0].country !== null
                    ? uniqueData[0].country
                    : ""
                }
                defaultStateARray={
                  uniqueData !== undefined && uniqueData.length > 0
                    ? uniqueData
                    : ""
                }
              />
            </Grid>
            <Grid item lg={6}>
              <TextFieldComponent
                formData={setformValue}
                title="Email"
                previousData={formValue}
                fieldkey="email"
                defaultState={
                  uniqueData !== undefined &&
                  uniqueData.length > 0 &&
                  uniqueData[0].email !== null
                    ? uniqueData[0].email
                    : ""
                }
                defaultStateARray={
                  uniqueData !== undefined && uniqueData.length > 0
                    ? uniqueData
                    : ""
                }
              />
            </Grid>
            <Grid item lg={6}>
              <TextFieldComponent
                formData={setformValue}
                title="Phone Number"
                previousData={formValue}
                fieldkey="mobile"
                defaultState={
                  uniqueData !== undefined &&
                  uniqueData.length > 0 &&
                  uniqueData[0].mobile !== null
                    ? uniqueData[0].mobile
                    : ""
                }
                defaultStateARray={
                  uniqueData !== undefined && uniqueData.length > 0
                    ? uniqueData
                    : ""
                }
              />
            </Grid>
            <Grid item lg={6}>
              {type === COMPANYNAME ? (
                <TextFieldComponent
                  formData={setformValue}
                  previousData={formValue}
                  title="Full address"
                  fieldkey="address1"
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].address1 !== null
                      ? uniqueData[0].address1
                      : ""
                  }
                  defaultStateARray={
                    uniqueData !== undefined && uniqueData.length > 0
                      ? uniqueData
                      : ""
                  }
                />
              ) : (
                <SelectLabel
                  formData={setformValue}
                  title="Company Name"
                  previousData={formValue}
                  fieldkey="company"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.company
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].company !== null
                      ? uniqueData[0].company.id
                      : ""
                  }
                  defaultStateARray={
                    uniqueData !== undefined && uniqueData.length > 0
                      ? uniqueData
                      : ""
                  }
                />
              )}
            </Grid>

            <Grid item lg={6}>
              {type === COMPANYNAME ? (
                <TextFieldComponent
                  formData={setformValue}
                  title="Gst"
                  previousData={formValue}
                  fieldkey="gst"
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].gst !== null
                      ? uniqueData[0].gst
                      : ""
                  }
                  defaultStateARray={
                    uniqueData !== undefined && uniqueData.length > 0
                      ? uniqueData
                      : ""
                  }
                />
              ) : (
                <SelectLabel
                  formData={setformValue}
                  title="Gender"
                  previousData={formValue}
                  fieldkey="gender"
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].gender !== null
                      ? uniqueData[0].gender
                      : ""
                  }
                  defaultStateARray={
                    uniqueData !== undefined && uniqueData.length > 0
                      ? uniqueData
                      : ""
                  }
                />
              )}
            </Grid>
            {type === COMPANYNAME ? (
              <Grid item lg={12}>
                <TextFieldComponent
                  formData={setformValue}
                  title="Address"
                  previousData={formValue}
                  fieldkey="address2"
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].address2 !== null
                      ? uniqueData[0].address2
                      : ""
                  }
                  defaultStateARray={
                    uniqueData !== undefined && uniqueData.length > 0
                      ? uniqueData
                      : ""
                  }
                />
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={2} sx={{ margin: "20px 40px" }}>
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
              sx={globalUseStyles.DeactivateButtonDesign}
            >
              {buttonName}
            </Button>
          </Stack>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default Add_Ediit_company_dialog;
