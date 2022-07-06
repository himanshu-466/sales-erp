import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Contacts from "../../Assets/Contacts.svg";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import ProjectPurple from "../../Assets/ProjectPurple.svg";
import {
  CompanyContactSearch,
  CompanyProjectSearch,
} from "../../Redux/Slices/CompanySlice";
import NameCompanyView from "../ViewContainers/NameCompanyView";
export default function RightDrawer({ companyName, type }) {
  const dispatch = useDispatch();
  const [ui, setUi] = React.useState(false);
  const [response, setResponse] = React.useState({});
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
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

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    handleAsync();
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {type === "Contact" ? (
            <Button onClick={toggleDrawer(anchor, true)}>
              <img src={Contacts} alt="Contact" />
            </Button>
          ) : (
            <Button onClick={toggleDrawer(anchor, true)}>
              <img src={ProjectPurple} alt="Project" />
            </Button>
          )}

          {ui ? (
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
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
            </Drawer>
          ) : (
            ""
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
