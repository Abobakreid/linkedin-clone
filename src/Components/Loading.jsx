import { Box } from "@mui/material";
// import loading from "/assets/loader.svg";
const Loading = () => {
  return (
    <div>
      <Box
        sx={{
          my: "20px",
          textAlign: "center",
          backgroundColor: "white",
          paddingY: "5px",
          paddingX: "15px",
        }}
      >
        {/* <img
          style={{
            display: "inline-block",
            width: "80px",
          }}
          src={loading}
          alt=""
        /> */}
      </Box>
    </div>
  );
};

export default Loading;
