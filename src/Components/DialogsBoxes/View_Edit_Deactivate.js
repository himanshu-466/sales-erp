import React, { useState } from "react";
import { MenuItem, Divider, Menu } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ViewIcon from "../../Assets/ViewIcon.svg";
import DeleteIcon from "../../Assets/DeactivateIcon.svg";
import Edit from "../../Assets/edit.svg";
import More from "../../Assets/More.svg";
import Add_Ediit_company_dialog from "./Add_Ediit_company_dialog";
import DeactivateDialog from "./DeactivateDialog";
import AddandEditDialog from "./AddandEditDialog";
const View_Edit_Deactivate = (props) => {
  const [modal, setModal] = useState(0);

  const handleMenuItem = (e) => {
    switch (e.target.id) {
      case "View":
        setModal(1);
        break;
      case "Edit":
        setModal(2);
        break;
      case "Deactivate":
        setModal(3);
        break;
    }
  };
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <img src={More} alt="More" {...bindTrigger(popupState)} />
            <Menu
              {...bindMenu(popupState)}
              onClick={(e) => handleMenuItem(e)}
              sx={{ width: "250px" }}
            >
              <MenuItem id="View" sx={{ width: "250px" }}>
                <img src={ViewIcon} id="View" />
                <div style={{ marginLeft: "10px" }} id="View">
                  View
                </div>
                {modal === 1 ? "" : ""}
              </MenuItem>
              <Divider />
              <MenuItem id="Edit">
                <img src={Edit} id="Edit" />
                <div style={{ marginLeft: "10px" }} id="Edit">
                  Edit
                </div>
                {props.type === "Company" && modal === 2 ? (
                  <Add_Ediit_company_dialog
                    state={setModal}
                    headingName="Edit company details"
                    buttonName="Save"
                  />
                ) : (
                  ""
                )}
                {props.type === "Contact" && modal === 2 ? (
                  <Add_Ediit_company_dialog
                    state={setModal}
                    headingName="Edit Contacts"
                    buttonName="Save"
                  />
                ) : (
                  ""
                )}
                {props.type === "Projects" && modal === 2 ? (
                  <AddandEditDialog
                    state={setModal}
                    headingName="Edit Projects"
                    buttonName="Save"
                  />
                ) : (
                  ""
                )}
              </MenuItem>
              <Divider />
              <MenuItem id="Deactivate">
                <img src={DeleteIcon} id="Deactivate" />
                <div style={{ marginLeft: "10px" }} id="Deactivate">
                  Deactivate
                </div>
                {props.type === "Company" && modal === 3 ? (
                  <DeactivateDialog state={setModal} headingName="company" />
                ) : (
                  ""
                )}
                {props.type === "Contact" && modal === 3 ? (
                  <DeactivateDialog state={setModal} headingName="contact" />
                ) : (
                  ""
                )}
                {props.type === "Projects" && modal === 3 ? (
                  <DeactivateDialog state={setModal} headingName="project" />
                ) : (
                  ""
                )}
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
};

export default View_Edit_Deactivate;
