import { Box, Button, Heading, Text} from "@chakra-ui/react";
import React from "react";

const MobileApp = () => {
  return (
    <Box m="auto" mt={50} textAlign="center">
      <br />
      <Box>
        <Heading
          fontWeight="700"
          fontStyle="normal"
          fontFamily="Montserrat - 700"
          fontSize="36px"
        >
          WANT TO BUILD YOUR OWN WORKOUT PLAN?
        </Heading>
        <Text
          p={5} 
          fontSize="22px"
          fontFamily="DM Serif Text -400"
          fontWeight={400}
        >
          Customize your workout plan with over 3000 free exercises in Jefit
          Workout Plan Builder. And easily share with
          <Text> friends. </Text>
        </Text>

        <Button
          bgColor="#00a9ff"
          color="white"
          borderRadius="20px"
          w="290px"
          fontFamily="Montserrat - 700"
          fontSize="20px"
          fontWeight="700"
        >
          CREATE WORKOUT PLAN
        </Button>
      </Box>
     
    </Box>
  );
};

export default MobileApp;
