/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const MediaReactions = ({ navItems }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        paddingY: "15px",
      }}
    >
      {navItems.map((nav, index) => {
        return (
          <Button
            key={index}
            startIcon={
              <img
                style={{
                  width: "30px",
                  height: "30px",
                }}
                src={nav.icon}
                alt=""
              />
            }
          >
            {nav.label}
          </Button>
        );
      })}
    </Box>
  );
};

export default MediaReactions;
