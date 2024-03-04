import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import addImg from "/assets/card-bg.svg";
import leftPhoto from "/assets/photo.svg";
import widgetIcon from "/assets/widget-icon.svg";
import itemIcon from "/assets/item-icon.svg";
import plusIcon from "/assets/plus-icon.svg";

// eslint-disable-next-line react/prop-types, no-unused-vars
const LeftSide = ({ personName }) => {
  // const data = useSelector((state) => state.userList.users);
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "22%" },
      }}
    >
      <Box
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "120px",
          }}
          src={addImg}
          alt=""
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="p"
            component={"p"}
            sx={{
              textAlign: " center",
              backgroundColor: "white",
              borderRadius: "50%",
              marginTop: "-50px",
              width: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={leftPhoto}
              alt=""
              style={{
                display: "inline-block",
              }}
            />
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingY: "20px" }}>
          <Typography variant="h6" component={"h6"}>
            Welcome, {personName}
          </Typography>
          <Typography variant="a" sx={{ color: "blue" }} component={"span"}>
            Add a Photo
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "20px",
            paddingY: "15px",
          }}
        >
          <Typography variant="div" component={"div"}>
            <Typography
              sx={{
                display: "inline-block",
                color: "#606060",
                marginBottom: "7px",
              }}
              variant="p"
              component={"span"}
            >
              Connections
            </Typography>
            <Typography variant="p" component={"p"}>
              Grow Your Networks
            </Typography>
          </Typography>
          <img
            style={{
              width: "25px",
            }}
            src={widgetIcon}
            alt=""
          />
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            padding: "0.8em",
          }}
        >
          <img
            style={{
              width: "25px",
            }}
            src={itemIcon}
            alt=""
          />
          <Typography variant="p" component={"p"}>
            My Items
          </Typography>
        </Box>
      </Box>
      {/* connections card */}
      <Box
        sx={{
          backgroundColor: "white",
          padding: "15px",
          marginTop: "25px",
        }}
      >
        <Typography
          sx={{
            paddingY: "4px",
          }}
          variant="p"
          component={"p"}
        >
          Groups
        </Typography>
        <Typography
          variant="div"
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "4px",
          }}
        >
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              sx={{
                padding: "0px",
              }}
              expandIcon={
                <img
                  style={{
                    width: "25px",
                  }}
                  src={plusIcon}
                  alt=""
                />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Events</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Typography>
        <Typography
          sx={{
            paddingY: "4px",
          }}
          variant="p"
          component={"p"}
        >
          Follows Hashtags
        </Typography>
        <Divider />
        <Typography
          sx={{
            color: "#606060",
            paddingY: "8px",
          }}
          variant="p"
          component={"p"}
        >
          Discover More
        </Typography>
      </Box>
    </Box>
  );
};

export default LeftSide;
