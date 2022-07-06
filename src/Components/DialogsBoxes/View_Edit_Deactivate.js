import React, { useState } from "react";
import { Divider, Stack } from "@mui/material";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import ViewIcon from "../../Assets/ViewIcon.svg";
import DeleteIcon from "../../Assets/DeactivateIcon.svg";
import Edit from "../../Assets/edit.svg";
import More from "../../Assets/More.svg";
import Add_Ediit_company_dialog from "./Add_Ediit_company_dialog";
import DeactivateDialog from "./DeactivateDialog";
import AddandEditDialog from "./AddandEditDialog";
import { globalUseStyles } from "../../GlobalCss";
import { COMPANYNAME, CONTACTVIEW, PROJECT } from "../../Constant/Constant";
import { useSelector } from "react-redux";
import CompanyDetailDialog from "./CompanyDetailDialog";
import CompanyDetailDialog2 from "./CompanyDetailDialog2";
import ProjectDetailDialog from "./ProjectDetailDialog";
const View_Edit_Deactivate = ({ type, dataID, data }) => {
  const projectDataBYID = useSelector((state) => state.project.Value);
  const contactDataBYID = useSelector((state) => state.contact.Value);
  const companyDataBYID = useSelector((state) => state.company.Value);
  let ProjectFilterData;
  let contactFilterData;
  let companyFilterData;
  if (type === PROJECT) {
    ProjectFilterData = projectDataBYID.filter((ele) => ele.id === dataID);
  } else if (type === COMPANYNAME) {
    companyFilterData = companyDataBYID.filter((ele) => ele.id === dataID);
  } else if (type === CONTACTVIEW) {
    contactFilterData = contactDataBYID.filter((ele) => ele.id === dataID);
  }

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
      {" "}
      <Popover>
        <PopoverTrigger>
          <img src={More} alt="More" />
        </PopoverTrigger>
        <PopoverContent
          onClick={(e) => handleMenuItem(e)}
          style={globalUseStyles.popupOuterDesign}
        >
          <PopoverBody id="View">
            <Stack direction="row" sx={globalUseStyles.PD10}>
              <img src={ViewIcon} id="View" />
              <div style={globalUseStyles.MLTEN} id="View">
                View
              </div>
            </Stack>
            {type === COMPANYNAME && modal === 1 ? (
              <CompanyDetailDialog2
                state={setModal}
                dataID={dataID}
                data={data}
                type="ViewCompany"
              />
            ) : type === PROJECT && modal === 1 ? (
              <ProjectDetailDialog
                state={setModal}
                dataID={dataID}
                data={data}
              />
            ) : (
              ""
            )}
          </PopoverBody>
          <Divider />
          <PopoverBody id="Edit">
            <Stack direction="row" sx={globalUseStyles.PD10}>
              <img src={Edit} id="Edit" />
              <div style={globalUseStyles.MLTEN} id="Edit">
                Edit
              </div>
            </Stack>
            {type === COMPANYNAME && modal === 2 ? (
              <Add_Ediit_company_dialog
                state={setModal}
                headingName="Edit company details"
                buttonName="Save"
                type={COMPANYNAME}
                uniqueData={companyFilterData}
              />
            ) : (
              ""
            )}
            {type === CONTACTVIEW && modal === 2 ? (
              <Add_Ediit_company_dialog
                state={setModal}
                headingName="Edit Contacts"
                buttonName="Save"
                type={CONTACTVIEW}
                uniqueData={contactFilterData}
              />
            ) : (
              ""
            )}
            {type === PROJECT && modal === 2 ? (
              <AddandEditDialog
                state={setModal}
                headingName="Edit Projects"
                buttonName="Save"
                type={PROJECT}
                uniqueData={ProjectFilterData}
              />
            ) : (
              ""
            )}
          </PopoverBody>
          <Divider />
          <PopoverBody id="Deactivate">
            <Stack direction="row" sx={globalUseStyles.PD10}>
              <img src={DeleteIcon} id="Deactivate" />
              <div style={globalUseStyles.MLTEN} id="Deactivate">
                Deactivate
              </div>
            </Stack>
            {type === COMPANYNAME && modal === 3 ? (
              <DeactivateDialog
                state={setModal}
                headingName="company"
                uniqueData={companyFilterData}
              />
            ) : (
              ""
            )}
            {type === CONTACTVIEW && modal === 3 ? (
              <DeactivateDialog
                state={setModal}
                headingName="contact"
                uniqueData={contactFilterData}
              />
            ) : (
              ""
            )}
            {type === PROJECT && modal === 3 ? (
              <DeactivateDialog
                state={setModal}
                headingName="project"
                uniqueData={ProjectFilterData}
              />
            ) : (
              ""
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default View_Edit_Deactivate;
