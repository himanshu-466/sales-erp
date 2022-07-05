import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SelectLabel from "../InputBoxDesign/SelectLabel";
import TextFieldComponent from "../InputBoxDesign/TextFieldComponent";
import { globalUseStyles } from "../../GlobalCss";
import { useForm } from "react-hook-form";
import InputTypeDate from "../InputBoxDesign/InputTypeDate";
import { useDispatch } from "react-redux";
import {
  GetProject,
  PostProject,
  UpdateProject,
} from "../../Redux/Slices/ProjectSlice";
import { GetFormData } from "../../Redux/Slices/FormDataSlice";
import { GetCompany } from "../../Redux/Slices/CompanySlice";
import { GetContact } from "../../Redux/Slices/ContactSlice";
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
const AddandEditDialog = ({
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
  const [formValue, setformValue] = React.useState({});
  const [upload, setUpload] = React.useState(false);
  const formListData = useSelector((state) => state.formdata.Value);

  const handleClose = () => {
    setOpen(false);
    state(0);
  };
  const updateUI = async () => {
    await dispatch(GetContact(""));
    await dispatch(GetFormData());
    await dispatch(GetCompany(""));
    await dispatch(GetProject(""));
    setUpload(false);
    handleClose();
  };
  const onSubmit = async () => {
    setUpload(true);
    if (headingName === "Add new project") {
      await dispatch(PostProject(formValue));
      await updateUI();
    } else if (headingName === "Edit Projects") {
      await dispatch(UpdateProject([uniqueData[0].id, formValue]));
      await updateUI();
    }
    handleClose();
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
          component="form"
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
                <SelectLabel
                  type="Edit"
                  formData={setformValue}
                  title="Company"
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
              </Grid>
              <Grid item lg={6}>
                <SelectLabel
                  formData={setformValue}
                  title="Clients"
                  previousData={formValue}
                  fieldkey="client"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.Client
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].client !== null
                      ? uniqueData[0].client.id
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
                <SelectLabel
                  formData={setformValue}
                  title="BDE"
                  previousData={formValue}
                  fieldkey="bde"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.bde
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].bde !== null
                      ? uniqueData[0].bde.id
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
                <SelectLabel
                  formData={setformValue}
                  title="BDM"
                  previousData={formValue}
                  fieldkey="bdm"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.bdm
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].bdm !== null
                      ? uniqueData[0].bdm.id
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
                <SelectLabel
                  formData={setformValue}
                  title="Account department"
                  previousData={formValue}
                  fieldkey="acc"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.acc
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].acc !== null
                      ? uniqueData[0].acc.id
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
                <SelectLabel
                  formData={setformValue}
                  title="Manager"
                  previousData={formValue}
                  fieldkey="manager"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.manager
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].manager !== null
                      ? uniqueData[0].manager.id
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
                <SelectLabel
                  formData={setformValue}
                  title="Dev Alloted"
                  previousData={formValue}
                  fieldkey="dev_alloted"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.dev_alloted
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].manager !== null
                      ? uniqueData[0].dev_alloted.id
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
                  title="Dev name for client"
                  previousData={formValue}
                  fieldkey="developer"
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].developer !== null
                      ? uniqueData[0].developer
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
                <SelectLabel
                  formData={setformValue}
                  title="Currency"
                  previousData={formValue}
                  fieldkey="currency"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.currency
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].currency !== null
                      ? uniqueData[0].currency.id
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
                  title="Cost"
                  previousData={formValue}
                  fieldkey="cost"
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].cost !== null
                      ? uniqueData[0].cost
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
                <InputTypeDate
                  formData={setformValue}
                  title="Payment start date"
                  previousData={formValue}
                  fieldkey="payment_start_date"
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].payment_start_date !== null
                      ? uniqueData[0].payment_start_date
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
                <SelectLabel
                  formData={setformValue}
                  title="Payment term"
                  previousData={formValue}
                  fieldkey="payment_term"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.payment_term
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].payment_term !== null
                      ? uniqueData[0].payment_term
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
                <SelectLabel
                  formData={setformValue}
                  title="Types"
                  previousData={formValue}
                  fieldkey="types"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.types
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].types !== null
                      ? uniqueData[0].types
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
                <SelectLabel
                  formData={setformValue}
                  title="Status"
                  previousData={formValue}
                  fieldkey="status"
                  listData={
                    Object.keys(formListData).length !== 0
                      ? formListData.status
                      : null
                  }
                  defaultState={
                    uniqueData !== undefined &&
                    uniqueData.length > 0 &&
                    uniqueData[0].status !== null
                      ? uniqueData[0].status
                      : ""
                  }
                  defaultStateARray={
                    uniqueData !== undefined && uniqueData.length > 0
                      ? uniqueData
                      : ""
                  }
                />
              </Grid>
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
      </div>
    </>
  );
};

export default AddandEditDialog;
