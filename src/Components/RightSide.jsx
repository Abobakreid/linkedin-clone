import { Box, Typography, Button } from "@mui/material";
import rightIcon from "/assets/right-icon.svg";
import bannerImage from "/assets/banner-image.jpg";
import feedIcon from "/assets/feed-icon.svg";

const RightSide = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "25%" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px 10px",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="p"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Add to Your Feed
          <img src={feedIcon} alt="" />
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <Typography
            sx={{
              borderRadius: "50%",
              border: "4px solid ",
              width: "48px",
              height: "48px",
              textAlign: "center",
              marginTop: "13px",
            }}
            variant="h4"
          >
            #
          </Typography>
          <Box>
            <Typography
              variant="p"
              component={"p"}
              sx={{
                textAlign: "center",
              }}
            >
              #Linkedin
              <Button
                sx={{
                  display: "block",
                  color: "black",
                  border: "3px solid black",
                  borderRadius: "20px",
                  "&:hover": {
                    border: "3px solid black",
                  },
                }}
                variant="outlined"
              >
                Follow
              </Button>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", margin: "10px 0" }}>
          <Typography
            sx={{
              borderRadius: "50%",
              border: "4px solid ",
              width: "48px",
              height: "48px",
              textAlign: "center",
              marginTop: "13px",
            }}
            variant="h4"
          >
            #
          </Typography>
          <Box>
            <Typography
              variant="p"
              component={"p"}
              sx={{
                textAlign: "center",
              }}
            >
              #Linkedin
              <Button
                sx={{
                  display: "block",
                  color: "black",
                  border: "3px solid black",
                  borderRadius: "20px",
                  "&:hover": {
                    border: "3px solid black",
                  },
                }}
                variant="outlined"
              >
                Follow
              </Button>
            </Typography>
          </Box>
        </Box>
        <Button endIcon={<img src={rightIcon} alt="" />}>
          View all recommendations
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          padding: "20px 10px",
          backgroundColor: "white",
        }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={bannerImage}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default RightSide;
