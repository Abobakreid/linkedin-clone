import { Stack } from "@mui/material";
import Adds from "../Components/Adds";
import Navbar from "../Components/Navbar";
import LeftSide from "../Components/LeftSide";
import CenterSide from "../Components/CenterSide";
import RightSide from "../Components/RightSide";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = useSelector((state) => state.userList.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.name == null) {
      navigate("/", { replace: true });
    }
  }, [data.name, navigate]);

  return (
    <>
      <Navbar homeNav={true} />
      <Adds />
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{ paddingX: "20px" }}
        spacing={2}
      >
        {data?.name && <LeftSide personName={data?.name} />}
        {data?.name && <CenterSide personName={data} />}
        <RightSide />
      </Stack>
    </>
  );
};

export default Home;
