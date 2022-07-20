import React from "react";
import { Box, Button, Heading, Text, Flex, Img } from "@chakra-ui/react";

const WorkOut = () => {
  return (
    <Box p={40} mb="0px" pt="80px">
      <Heading
        fontFamily="Montserrat - 700"
        fontSize="30px"
        fontWeight="700"
        textAlign="center"
        fontStyle="normal"
      >
        JEFIT COVERS ALL OF YOUR WORKOUT NEEDS
      </Heading>
      
      {/* 1st flex */}
      <br />
      <br />
      <Flex>
        <Box alignSelf="center" m="auto" mr={10}>
        <Heading
            fontFamily="Montserrat - 700"
            fontSize="30px"
            fontWeight="700"
            fontStyle="normal"
          >
            PERSONALIZE YOUR
          </Heading>
          <Heading
            fontFamily="Montserrat - 700"
            fontSize="30px"
            fontWeight="700"
            fontStyle="normal"
          >
            WORKOUT PLANS
          </Heading>
          <br />
          <Text fontSize="m">Log training with one-click</Text>
          <Text fontSize="m">Control rest time easily</Text>
          <Text fontSize="m">Available on mobile and watch</Text>
          <Text fontSize="m">Audio and video instructions</Text>
          <br />
          <Button
            bgColor="#00a9ff"
            color="white"
            borderRadius="20px"
            w="160px"
            fontFamily="Montserrat - 700"
            fontSize="20px"
            fontWeight="700"
          >
            SIGN UP NOW
          </Button>
        </Box>
        <Box h="700px" mr={35}>
          <Img
            h="100%"
            src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/web_create-2.png.webp"
            alt="image.png"
          />
        </Box>
      </Flex>

      {/* 2nd flex */}
      <br />
      <br />
      <Flex>
        <Box h="700px" mr={15}>
          <Img
            h="100%"
            src="https://cdn.jefit.com/wp/wp-content/uploads/2022/03/web_train.webp"
            alt="image.png"
          />
        </Box>
        <Box alignSelf="center" m="auto" mr={125}>
          <Heading
            fontFamily="Montserrat - 700"
            fontSize="30px"
            fontWeight="700"
            fontStyle="normal"
          >
            PERSONALIZE YOUR
          </Heading>
          <Heading
            fontFamily="Montserrat - 700"
            fontSize="30px"
            fontWeight="700"
            fontStyle="normal"
          >
            WORKOUT PLANS
          </Heading>
          <br />
          <Text fontSize="m">1400+ exercises with instructions</Text>
          <Text fontSize="m">Pro-designed workout plans</Text>
          <Text fontSize="m">Support custom exercises</Text>
          <Text fontSize="m">Flexible workout planning tool</Text>
          <br />
          <Button
            bgColor="#00a9ff"
            color="white"
            borderRadius="20px"
            w="160px"
            fontFamily="Montserrat - 700"
            fontSize="20px"
            fontWeight="700"
          >
            SIGN UP NOW
          </Button>
        </Box>
      </Flex>

      {/* 3rd flex */}
      <br />
      <br />
      <Flex>
        <Box alignSelf="center" m="auto" mr={10}>
          <Heading
            fontFamily="Montserrat - 700"
            fontSize="30px"
            fontWeight="700"
            fontStyle="normal"
          >
           VIEW PROGRESS &
          </Heading>
          <Heading
            fontFamily="Montserrat - 700"
            fontSize="30px"
            fontWeight="700"
            fontStyle="normal"
          >
           REACH NEW LIMITS
          </Heading>
          <br />
          <Text fontSize="m">Log training with one-click</Text>
          <Text fontSize="m">Control rest time easily</Text>
          <Text fontSize="m">Available on mobile and watch</Text>
          <Text fontSize="m">Audio and video instructions</Text>
          <br />
          <Button
            bgColor="#00a9ff"
            color="white"
            borderRadius="20px"
            w="160px"
            fontFamily="Montserrat - 700"
            fontSize="20px"
            fontWeight="700"
          >
            SIGN UP NOW
          </Button>
        </Box>
        <Box h="700px" mr={35}>
          <Img
            h="100%"
            src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/web_analyze-2.png.webp"
            alt="image.png"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkOut;
