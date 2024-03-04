/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import PostHeader from "./PostHeader";
import PostData from "./PostData";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Posts = ({ postData }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        paddingY: "20px",
        paddingX: "15px",
        paddingBottom: "6px",
        marginY: "20px",
        borderRadius: "20px",
      }}
    >
      {postData?.actor && <PostHeader postData={postData?.actor} />}
      {postData && <PostData postData={postData && postData} />}
    </Box>
  );
};

export default Posts;
