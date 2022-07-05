import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, Stack } from "@mui/material";
import CompanyView from "../ViewList/CompanyView";
import ContactView from "../ViewList/ContactView";
import ProjectList from "../ViewList/ProjectList";

import { globalUseStyles } from "../../GlobalCss";
import { Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import FailureView from "../../FailureView/FailureView";

const Tabslayout = ({ searchvalue }) => {
  const [value, setValue] = React.useState("1");
  const ContactViewData = useSelector((state) => state.contact.Value);
  const CompanyViewData = useSelector((state) => state.company.Value);
  const ProjectViewData = useSelector((state) => state.project.Value);
  // Debouncing

  const handleSearch = (e, d) => {
    let timer;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      searchvalue(e.target.value);
    }, d);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", marginTop: "15px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={8.5}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab label="Company" value="1" sx={globalUseStyles.tabdesign} />
                <Tab
                  label="Contacts"
                  value="2"
                  sx={globalUseStyles.tabdesign}
                />
                <Tab
                  label="Projects"
                  value="3"
                  sx={globalUseStyles.tabdesign}
                />
              </TabList>
            </Grid>
            <Grid item xs={3.5}>
              <Input
                type="search"
                placeholder="Search"
                style={globalUseStyles.inputBoxStyle}
                onChange={(e, delay) => handleSearch(e, 600)}
              />
            </Grid>
          </Grid>
        </Box>
        <TabPanel value="1">
          {CompanyViewData.length > 0 ? (
            CompanyViewData.map((ele, id) => (
              <CompanyView key={id} data={ele} />
            ))
          ) : (
            <FailureView />
          )}
        </TabPanel>
        <TabPanel value="2">
          {ContactViewData.length > 0 ? (
            ContactViewData.map((ele, id) => {
              return <ContactView key={id} data={ele} />;
            })
          ) : (
            <FailureView />
          )}
        </TabPanel>
        <TabPanel value="3">
          {ProjectViewData.length > 0 ? (
            ProjectViewData.map((ele, id) => (
              <ProjectList key={id} data={ele} />
            ))
          ) : (
            <FailureView />
          )}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabslayout;
