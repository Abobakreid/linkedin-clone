/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import MediaReactions from "./MediaReactions";
import userImg from "/assets/user.svg";
import likeIcon from "/assets/like-icon.svg";
import shareIcon from "/assets/share-icon.svg";
import sendIcon from "/assets/send-icon.svg";
import shareComment from "/assets/share-comment.svg";
import ReactPlayer from "react-player";

// eslint-disable-next-line no-unused-vars, react/prop-types
const PostData = ({ postData }) => {
  const navItems = [
    {
      label: "Like",
      icon: likeIcon,
    },
    {
      label: "Comment",
      icon: shareComment,
    },
    {
      label: "Share",
      icon: shareIcon,
    },
    {
      label: "Send",
      icon: sendIcon,
    },
  ];
  return (
    <Box>
      <Typography
        variant="p"
        component={"h4"}
        sx={{
          my: "10px",
        }}
      >
        {postData?.comments}
      </Typography>
      {postData?.shareImage && (
        <img
          src={postData?.shareImage ? postData?.shareImage : userImg}
          style={{
            width: "100%",
            maxHeight: "600px",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
      )}
      {postData?.videoLink && (
        <div className="homeVid">
          <ReactPlayer
            style={{
              width: "100%",
              maxHeight: "200px",
              height: "100%",
            }}
            url={postData?.videoLink}
          />
        </div>
      )}
      <Box
        sx={{
          display: "flex",
          gap: "0 30px",
          my: "10px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          sx={{
            display: "flex",
            alignItems: "center",

            "*": {
              color: "black",
            },
          }}
        >
          <img src={likeIcon} alt="" /> 0
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Typography variant="p"> 0 Comments</Typography>
          <Typography variant="p">0 Share</Typography>
        </Box>
      </Box>
      <Divider />
      <MediaReactions navItems={navItems} />
    </Box>
  );
};

export default PostData;
