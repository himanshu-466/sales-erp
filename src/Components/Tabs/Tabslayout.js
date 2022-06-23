import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, Stack } from "@mui/material";
import CompanyView from "../ViewList/CompanyView";
import ContactView from "../ViewList/ContactView";
import ProjectList from "../ViewList/ProjectList";
// import Search from "../../Assets/Seach.svg";

const Tabslayout = () => {
  const tabdesign = {
    height: "20px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "20px",
  };

  const inputBoxStyle = {
    display: "flex",
    flexDirection: " row",
    alignItems: " center",
    padding: "8px",
    gap: "8px",
    width: "340px",
    height: "32px",
    background: "#FFFFFF",
    border: "1px solid #D1D4D7",
    borderRadius: "4px",
    flex: "none",
    order: 1,
    flexGrow: 0,
    margin: "20px 0px 2px 20px",
    outline: 0,
    // backgroungImage: `${Search}`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "left ",
  };
  const [value, setValue] = React.useState("1");

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
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Company" value="1" sx={tabdesign} />
                <Tab label="Contacts" value="2" sx={tabdesign} />
                <Tab label="Projects" value="3" sx={tabdesign} />
              </TabList>
            </Grid>
            <Grid item xs={3.5}>
              <input type="search" style={inputBoxStyle} placeholder="Search" />
            </Grid>
          </Grid>
        </Box>
        <TabPanel value="1">
          <CompanyView />
          <CompanyView />
          <CompanyView />
          <CompanyView />
          <CompanyView />
        </TabPanel>
        <TabPanel value="2">
          <ContactView />
          <ContactView />
          <ContactView />
          <ContactView />
          <ContactView />
        </TabPanel>
        <TabPanel value="3">
          <ProjectList />
          <ProjectList />
          <ProjectList />
          <ProjectList />
          <ProjectList />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabslayout;
