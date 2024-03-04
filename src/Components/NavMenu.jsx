import { Box, Button } from "@mui/material";
import { useState } from "react";
import NavUser from "/assets/user.svg";
import downIcon from "/assets/down-icon.svg";
import { Menu, MenuItem } from "@mui/material";
import DialpadIcon from "@mui/icons-material/Dialpad";
import ellipsisIcon from "/assets/ellipsis.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../Redux/userList";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavMenu = ({ NavType }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const data = useSelector((state) => state.userList.users);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log("hellow");
  };
  const handleSignOut = () => {
    setAnchorEl(null);
    dispatch(logOutUser()).then(() => {
      navigate("/", { replace: true });
    });
  };

  // console.log(data, "users");

  return (
    <div
      style={{
        borderRight: NavType == "me" ? "1px solid black" : 0,
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          display: "block",
          marginRight: NavType == "me" ? { xs: "0", lg: "20px" } : 0,
          marginLeft: NavType == "work" ? { xs: "0", lg: "20px" } : 0,
          borderRadius: 0,
        }}
      >
        {NavType == "me" ? (
          <img
            style={{
              width: "40px",
              borderRadius: "50%",
            }}
            src={data.photoUrl ? data.photoUrl : NavUser}
          />
        ) : null}

        {NavType == "work" ? (
          <DialpadIcon
            sx={{
              fontSize: "40px",
              paddingTop: { xs: 0, lg: "8px" },
            }}
          />
        ) : null}

        {NavType == "ellipsis" ? (
          <img
            style={{
              width: "30px",
              height: "30px",
            }}
            src={ellipsisIcon}
          />
        ) : null}

        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <span>{NavType !== "ellipsis" ? NavType : null}</span>
          {NavType !== "ellipsis" ? (
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              src={downIcon}
            />
          ) : null}
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {NavType == "me" ? (
          <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
        ) : null}
        {NavType == "work" ? (
          <MenuItem onClick={handleSignOut}>work</MenuItem>
        ) : null}
      </Menu>
    </div>
  );
};

export default NavMenu;
