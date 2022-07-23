import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import data from "./FooterData";

const Footer = () => {
  return (
    <Box>
      <br />
      <br />
      <Box bgColor="#f6fbff" p="25" pt={20}>
        <Box w="70%" m="auto" boxShadow="2xl" p="6" rounded="md" bg="white">
          <Flex>
            <Box alignSelf="center">
              <Heading
                fontWeight="700"
                fontStyle="normal"
                fontFamily="Montserrat - 700"
                fontSize="26px"
              >
                GET OUR MOBILE APP
              </Heading>
              <br />
              <Text as="xs">Download and start your workout journey</Text>
            </Box>
            <Spacer />

            <Flex gap="3rem">
              <Box>
                <Image
                  w="180px"
                  h="auto"
                  src="https://cdn.jefit.com/wp/wp-content/uploads/2021/12/qrcode_only.png"
                  alt="Dan Abramov"
                />
              </Box>
              <Box alignSelf="center">
                <Image
                  w="250px"
                  h="auto"
                  src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp"
                  alt="Dan Abramov"
                />
                <br />
                <Image
                  w="250px"
                  h="auto"
                  src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp"
                  alt="Dan Abramov"
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        //   bgColor="black"
        filter="auto"
        brightness="60%"
        bgImage="url('https://www.jefit.com/wp/wp-content/uploads/2021/12/group-muscular-athletes-doing-workout-gym-gymnastics-training-fitness-workout-flexibility-active-healthy-lifestyle-youth-bodybuilding-training-with-weights-doing-squats-scaled-1.jpg')"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100%"
        size="100%"
        h={200}
      >
        <Flex
          gap={6}
          align="center"
          justifyContent="space-between"
          w="60%"
          m="auto"
          pt={50}
          filter="auto"
          brightness="100%"
          color="white"
        >
          {data.map((e) => (
            <Flex direction="column" gap={2}>
              {e.arr.map((el) => (
                <Link
                  fontSize="16px"
                  fontFamily="DM Serif  -700"
                  fontWeight={700}
                  color="white"
                  to={el.link}
                >
                  {el.title}
                </Link>
              ))}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
