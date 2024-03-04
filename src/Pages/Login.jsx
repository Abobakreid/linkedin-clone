import { Box, Container, Typography } from "@mui/material";
import heroImg from "/assets/login-hero.svg";
import SGoogle from "/assets/google.svg";
import { useDispatch, useSelector } from "react-redux";
import { logUser } from "../Redux/userList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userList.users);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logUser());
  };

  useEffect(() => {
    {
      data?.name != null && navigate("/home", { replace: true });
    }
  }, [data.name, navigate]);

  return (
    <>
      <Navbar homeNav={false} />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          paddingY: "50px",
          justifyContent: { xs: "center", sm: "space-between" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h1"
            color="initial"
            sx={{
              fontWeight: "bold",
              color: "blue",
              textWrap: "break-word",
              fontSize: { xs: "3rem", md: "5rem" },
              textAlign: { xs: "center", sm: " start" },
            }}
          >
            welcome to your <br />
            professional community
          </Typography>

          <Box
            variant="h1"
            color="initial"
            onClick={handleClick}
            sx={{
              display: "flex",
              border: "2px solid black",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 0",
              borderRadius: "20px",
              gap: "10px",
              marginTop: { xs: "450px", sm: "540px", md: "200px" },
              width: { md: "460px" },
              cursor: "pointer",
              backgroundColor: "white",
            }}
          >
            <img src={SGoogle} alt="" style={{ display: "inline-block" }} />
            <Typography variant="h4" color="initial">
              Sign in with google
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            marginTop: { xs: "-450px", sm: "-580px", md: "0" },
            textAlign: { xs: " center", md: "start" },
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              width: { xs: "350px", md: "100%" },
            }}
            component={"img"}
            variant="h1"
            color="initial"
            src={heroImg}
          ></Typography>
        </Box>
      </Container>
    </>
  );
};

export default Login;
