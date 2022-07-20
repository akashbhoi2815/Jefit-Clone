import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="#3cb8ff" h="100" p="4px">
      <Flex w="70%" m="auto">
        <Box>
          <Link to="/">
            <img
              style={{ backgroundColor: "#3CB8FF", height: "95px" }}
              src="https://www.jefit.com/wp/wp-content/uploads/2021/12/jefit_logo_website_header-3.png"
              alt=""
            />
          </Link>
        </Box>
        <Spacer />
        <Flex
          alignSelf="center"
          gap="3.5rem"
          mr="5rem"
          fontFamily="DM Sans"
          fontWeight="400"
          fontSize="18px"
          color="white"
        >
          <Link to="/">Get Jefit App</Link>
          <Link to="/exercise">Exercise Guide</Link>
          <Link to="/login">Login</Link>
        </Flex>
        <Box alignSelf="center" mr="50px">
          <Link to="/signup">
            <Button color="#3CB8FF" w="120px" borderRadius="30px" m="auto">
              Signup
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
