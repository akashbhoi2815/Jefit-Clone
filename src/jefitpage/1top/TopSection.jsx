import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const TopSection = () => {
  return (
    <Box
      bgImage="url('https://www.jefit.com/wp/wp-content/uploads/2021/11/caucasian-man-practicing-weightlifting-gym-2-scaled-1.jpg')"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      size="100%"
    >
      <Flex color="white"  align="center" justify="center" h="100vh">
        <Box alignSelf="center">
          <Heading fontFamily="Montserrat - 700" fontSize="42px" fontWeight={700}>MANAGE & TRACK </Heading>
          <Heading fontFamily="Montserrat - 700" fontSize="42px" fontWeight={700}>ALL YOUR WORKOUT </Heading>
          <Heading fontFamily="Montserrat - 700" fontSize="42px" fontWeight={700}>IN ONE PLACE</Heading>
          <br />
          <Heading as="h5" size="lg" fontFamily="DM Sans - 600" fontStyle="italic" fontSize="26px" fontWeight="600">
            #1 Popular Workout Tracking Platform
          </Heading>
          <br />
          <Flex gap="3rem">
            <Box alignSelf="center">
              <Image
                w="150px"
                h="auto"
                src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp"
                alt="Dan Abramov"
              />
              <br />
              <Image
                w="150px"
                h="auto"
                src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp"
                alt="Dan Abramov"
              />
            </Box>
            <Box>
              <Image
                w="200px"
                h="auto"
                src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png.webp"
                alt="Dan Abramov"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Image
            h="500px"
            src="https://cdn.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.webp"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default TopSection;
