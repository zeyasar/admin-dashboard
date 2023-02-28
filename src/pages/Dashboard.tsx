import * as React from "react";
import {
  styled,
  alpha,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import kullanıcı from "../assets/kullanıcı.png";
import anasayfa from "../assets/anasayfa.png";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Outlet } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #EBEEF2",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const drawerWidth: number = 296;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));



function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
  
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{ backgroundColor: "white" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              justifyContent: "space-between",
              ...(open && { justifyContent: "right" }),
            }}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Search sx={{ my: 1 }}>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#C7CED9" }} />
                </SearchIconWrapper>
                <StyledInputBase inputProps={{ "aria-label": "search" }} />
              </Search>
              <IconButton sx={{ ml: 2 }}>
                <TuneIcon sx={{ color: "#B8BFCC" }} />
              </IconButton>
              <IconButton>
                <NotificationsNoneIcon sx={{ color: "#B8BFCC" }} />
              </IconButton>
              <IconButton>
                <Avatar />
              </IconButton>
              <Typography
                color={"black"}
                sx={{
                  my: "auto",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1F2633",
                }}
              >
                emre
              </Typography>
              <IconButton sx={{ ml: 1 }}>
                <KeyboardArrowDownIcon color="primary" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              mb: [2],
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ ...(!open && { display: "none" }), marginRight: "36px" }}
            />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon
                sx={{
                  ...(!open && { display: "none" }),
                }}
              />
            </IconButton>
          </Toolbar>
          <Box sx={{ display: "flex", mx: 2, my: 3 }}>
            <Avatar sx={{ mr: 2 }} />
            <Box sx={{ mx: 2, textAlign: "left" }}>
              <Typography
                sx={{
                  my: "auto",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1F2633",
                }}
              >
                emre@mayzor.net
              </Typography>
              <Typography
                sx={{
                  my: "auto",
                  fontSize: "12px",
                  color: "#B8BFCC",
                  mt: 1,
                }}
              >
                Yönetici
              </Typography>
            </Box>
            <PowerSettingsNewOutlinedIcon color="primary" sx={{ mx: 2, mt:1 }} />
          </Box>

          <List component="nav">
            <Box
              sx={{
                display: "flex",
                mx: 3,
                my: 3,
                justifyContent: "space-between",
                ...(!open && { display: "none" }),
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#98A2B2",
                  mt: 1,
                  alignItems: "center",
                }}
              >
                Navigasyon
              </Typography>
              <KeyboardArrowUpOutlinedIcon color="primary" />
            </Box>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={anasayfa}
                  alt="kullanıcı"
                  style={{ marginLeft: 10 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Anasayfa"
                disableTypography={true}
                sx={{ fontSize: "12px", fontWeight: 700, color: "#1F2633" }}
              />
            </ListItemButton>
            <Box
              sx={{
                display: "flex",
                mx: 3,
                my: 3,
                justifyContent: "space-between",
                ...(!open && { display: "none" }),
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#98A2B2",
                  mt: 1,
                  alignItems: "center",
                }}
              >
                APPS
              </Typography>
              <KeyboardArrowUpOutlinedIcon color="primary" />
            </Box>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={kullanıcı}
                  alt="kullanıcı"
                  style={{ marginLeft: 10 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Kullanıcı İşlemleri"
                disableTypography={true}
                sx={{ fontSize: "12px", fontWeight: 700, color: "#1F2633" }}
              />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Toolbar />
          <Outlet/>
          <Footer />
        </Box>
      </Box>

  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
