/* eslint-disable react/prop-types */
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavbarTags = ({ navItems, children }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", lg: "block" },
        borderBottom: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {navItems?.map((item, index) => (
          <Tab icon={<img src={item.icon} />} key={index} label={item.label} />
        ))}
        
        {children && children}
      </Tabs>
    </Box>
  );
};

export default NavbarTags;
