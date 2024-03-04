/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import userImg from "/assets/user.svg";
import photoIcon from "/assets/photo-icon.svg";
import videoIcon from "/assets/video-icon.svg";
import eventIcon from "/assets/event-icon.svg";
import articleIcon from "/assets/article-icon.svg";

import HomeDialog from "./HomeDialog";
import Loading from "./Loading";
import Posts from "./Posts";
import MediaReactions from "./MediaReactions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../Redux/userList";
const navItems = [
  {
    label: "Photo",
    icon: photoIcon,
  },
  {
    label: "Video",
    icon: videoIcon,
  },
  {
    label: "Event",
    icon: eventIcon,
  },
  {
    label: "Write article",
    icon: articleIcon,
  },
];

// eslint-disable-next-line react/prop-types
const CenterSide = ({ personName }) => {
  const data = useSelector((state) => state.userList.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "50%" },
        paddingX: "15px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          paddingY: "20px",
          paddingX: "15px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
            src={personName?.name ? personName.photoUrl : userImg}
            alt=""
          />
          {/* HomeDialog */}
          <HomeDialog personName={personName} />
          {/* HomeDialog */}
        </Box>
        {/* MediaReactions */}
        <MediaReactions navItems={navItems} />
        {/* MediaReactions */}
      </Box>
      {/* Loading  */}
      <Loading />
      {/* Loading */}
      {/* post */}
      {data &&
        data?.map((post, index) => <Posts key={index} postData={post} />)}

      {/* post */}
    </Box>
  );
};

export default CenterSide;
