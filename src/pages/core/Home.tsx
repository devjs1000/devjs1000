import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
const Home = () => {
  return (
    <Box overflow={'clip'}>
      <Outlet />
      <BottomBar />
    </Box>
  );
};

export default Home;
