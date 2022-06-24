import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Stack,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./DrawerLayout.css";
import NotificationsIcon from "../../Assets/notification.svg";
import ProjectFolderIcon from "../../Assets/projecticon.png";
import HelpMessage from "../../Assets/message-question.svg";
import AvatarIcon from "../../Assets/Ellipse 1.svg";
import DownArrow from "../../Assets/DownArrow.svg";
import AddNewbutton from "../AddNew/AddNewbutton";
import Tabslayout from "../Tabs/Tabslayout";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    justifyContent: "end",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerLayout() {
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const data = localStorage.getItem("user-info");
    if (data == null) {
      navigate("/login");
    }
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "white",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="end"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <img src={HelpMessage} alt="Support" />
            <Badge badgeContent={4} color="secondary">
              <img src={NotificationsIcon} alt="Notification" />
            </Badge>

            <Stack direction="column">
              <Typography
                sx={{ color: "black", fontWeight: "bold", fontSize: "15px" }}
              >
                Himanshu Agarwal
              </Typography>

              <Typography
                sx={{ color: "black", fontSize: "12px", textAlign: "right" }}
              >
                Admin
              </Typography>
            </Stack>
            <Avatar alt="Profile" src={AvatarIcon} />
            <img src={DownArrow} alt="More" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            sx={{ textAlign: "center", fontWeight: "900", width: "100%" }}
          >
            FLICK<span style={{ color: "#6B62E2" }}>ERP</span>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "1tr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Projects"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={ProjectFolderIcon} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "#777E86" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <AddNewbutton />
        <Tabslayout />
      </Main>
    </Box>
  );
}
