import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import loginImg from "/assets/login-logo.svg";
import navHome from "/assets/linkedin.png";
import NavHome from "/assets/nav-home.svg";
import NavNetwork from "/assets/nav-network.svg";
import NavJobs from "/assets/nav-jobs.svg";
import NavMessaging from "/assets/nav-messaging.svg";
import NavNotifications from "/assets/nav-notifications.svg";

import { useState } from "react";
import NavMenu from "./NavMenu";
import NavbarTags from "./NavbarTags";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  backgroundColor: "#8e8e8e",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
    "::placeholder": {
      color: "white",
    },
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const drawerWidth = 240;
const navItems = [
  {
    label: "Home",
    icon: NavHome,
  },
  {
    label: "MY Network",
    icon: NavNetwork,
  },
  {
    label: "Jobs",
    icon: NavJobs,
  },
  {
    label: "Messaging",
    icon: NavMessaging,
  },
  {
    label: "Notifications",
    icon: NavNotifications,
  },
];
// eslint-disable-next-line react/prop-types
const Navbar = ({ homeNav }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={index} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: homeNav ? "white" : "inherit",
        paddingY: "3px",
        boxShadow: "none",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          marginX: homeNav == true ? "auto !important" : 0,
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="p"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  display: "block",
                  mr: "20px",
                }}
              >
                <Typography
                  variant="p"
                  noWrap
                  component="img"
                  src={homeNav ? navHome : loginImg}
                  sx={{
                    display: "inline-block",
                    width: homeNav ? "40px" : "150px",
                  }}
                ></Typography>
              </Typography>
              {homeNav && (
                <Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Box>
              )}
            </Box>

            {homeNav && (
              <>
                <NavbarTags navItems={navItems}>
                  <NavMenu NavType={"me"} />
                  <NavMenu NavType={"work"} />
                </NavbarTags>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { lg: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
            {!homeNav && (
              <Box>
                <Button
                  sx={{
                    color: "#8F8F8F",
                    borderRadius: "10px",
                    padding: "8px 20px",
                  }}
                >
                  Join Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    padding: "8px 20px",
                  }}
                >
                  Sign in
                </Button>
              </Box>
            )}
          </Box>
          {homeNav && (
            <Drawer
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                backgroundColor: "red",
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  border: "1px solid",
                },
              }}
            >
              {drawer}
            </Drawer>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
