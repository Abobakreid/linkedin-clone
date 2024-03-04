/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, TextField, Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import userImg from "/assets/user.svg";
import shareComment from "/assets/share-comment.svg";
import shareImage from "/assets/share-image.svg";
import shareVideo from "/assets/share-video.svg";
import { forwardRef, useState } from "react";
import { Timestamp } from "firebase/firestore";
import { getArticles, postArticles } from "../Redux/userList";
import { useDispatch } from "react-redux";
import ReactPlayer from "react-player";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line react/prop-types
const HomeDialog = ({ personName }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [storeImageLink, setStoreImageLink] = useState("");
  const [storeImage, setStoreImage] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const deleteData = () => {
    setStoreImageLink("");
    setVideoLink("");
  };

  const handleClose = () => {
    setOpen(false);
    setPostText("");
    setMediaType("");
    deleteData();
  };

  const handlePosts = async (e) => {
    e.preventDefault();
    setOpen(false);
    deleteData();
    setMediaType("");
    setPostText("");
    let payLoad = {
      CreatorDescription: personName?.email,
      CreatorTitle: personName?.name,
      CreatorImage: personName?.photoUrl,
      postText: postText,
      postImage: storeImage,
      postVideoLink: videoLink,
      timestamp: Timestamp.now().toDate().toLocaleDateString(),
    };
    console.log(payLoad, "payLoadHome");
    await dispatch(postArticles(payLoad));
    dispatch(getArticles());
  };

  const handleChange = (e) => {
    setPostText(e.target.value);
  };
  const handleChangeImage = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file, "filefile");
    setStoreImage(file);
    reader.onloadend = () => {
      setStoreImageLink(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleChangeVideoLink = (e) => {
    setVideoLink(e.target.value);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setMediaType(e.currentTarget.querySelector("img").getAttribute("alt"));
    deleteData();
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          width: "95%",
          display: "inline-block",
          padding: "15px 15px",
          borderRadius: "35px",
          textAlign: "start",
        }}
        onClick={handleClickOpen}
      >
        Start Post..
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            width: { xs: "95%", md: "600px" },
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={personName?.name ? personName.photoUrl : userImg}
              alt=""
            />
            <Typography variant="p" component={"p"}>
              {personName?.name}
            </Typography>
          </Box>
          <TextField
            minRows={3}
            sx={{
              width: "100%",
              margin: "10px 0",
              border: "none",
              ".css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
                border: "none",
              },
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            value={postText}
            onChange={handleChange}
            autoFocus
            required
            type="text"
            id="outlined-textarea"
            placeholder="what do you want to talk about?"
            multiline
            variant="outlined"
          />
          {mediaType == "img" ? (
            <>
              <Box
                sx={{
                  position: "relative",
                  margin: "10px 0",
                  height: "60px",
                }}
              >
                <TextField
                  sx={{
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    opacity: "0",
                    zIndex: "9999",
                    "*": {
                      height: "100%",
                      cursor: "pointer",
                    },
                  }}
                  onChange={handleChangeImage}
                  type="file"
                  placeholder="Select image"
                  variant="outlined"
                />
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: "99",
                  }}
                >
                  Select image
                </Typography>
              </Box>
              {storeImageLink && (
                <img
                  id="imgOut"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    maxHeight: "200px",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={storeImageLink}
                  alt=""
                />
              )}
            </>
          ) : mediaType == "video" ? (
            <>
              <TextField
                value={videoLink}
                sx={{
                  width: "100%",
                  margin: "10px 0",
                  ".css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
                    resize: "both",
                  },
                }}
                placeholder="link"
                variant="outlined"
                onChange={handleChangeVideoLink}
              />
              {videoLink && (
                <div className="vid">
                  <ReactPlayer
                    style={{
                      width: "100%",
                      maxHeight: "200px",
                      height: "100%",
                      "#widget2": {
                        width: "100%",
                      },
                    }}
                    url={videoLink}
                  />
                </div>
              )}
            </>
          ) : null}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton
              onClick={handleClick}
              color="secondary"
              aria-label="add an alarm"
            >
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
                src={shareImage}
                alt="img"
              />
            </IconButton>
            <IconButton
              onClick={handleClick}
              color="secondary"
              aria-label="add an alarm"
            >
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
                src={shareVideo}
                alt="video"
              />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <Divider orientation="vertical" flexItem />
              <img
                style={{
                  display: "inline-block",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  marginLeft: "9px",
                  marginRight: "2px",
                }}
                src={shareComment}
                alt=""
              />
              <span
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                Anyone
              </span>
            </IconButton>
          </Box>
          <Button autoFocus onClick={handlePosts}>
            Post
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default HomeDialog;
