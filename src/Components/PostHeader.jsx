/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import NavMenu from "./NavMenu";
import userImg from "/assets/user.svg";

// eslint-disable-next-line no-unused-vars, react/prop-types
const PostHeader = ({ postData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* person info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            width: "65px",
            height: "65px",
            marginRight: "15px",
          }}
          src={postData?.image ? postData?.image : userImg}
          alt=""
        />
        <Box
          sx={{
            paddingTop: "15px",
          }}
        >
          <Typography variant="p" component={"p"}>
            {postData?.title}
          </Typography>
          <Typography
            sx={{
              color: "#606060",
            }}
            variant="p"
            component={"span"}
          >
            {postData?.description}
          </Typography>
          <Typography
            sx={{
              color: "#606060",
            }}
            variant="p"
            component={"p"}
          >
            {postData?.data}
          </Typography>
        </Box>
      </Box>
      {/* person info */}
      <NavMenu NavType={"ellipsis"} />
    </Box>
  );
};

export default PostHeader;
