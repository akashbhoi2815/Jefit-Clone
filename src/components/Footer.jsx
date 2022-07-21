import { Box, Flex, Heading, Text, Image, Spacer } from "@chakra-ui/react";
import React from "react";

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
    </Box>
  );
};

export default Footer;
