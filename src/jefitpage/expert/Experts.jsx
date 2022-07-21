import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import data from "./Expert";

const Experts = () => {
  return (
    <Box bgColor="#f2f6ff" h={700}>
      <Box
        align="center"
        fontFamily="Montserrat - 700"
        fontSize="30px"
        fontWeight="700"
        fontStyle="normal"
        display="block"
      >
        <Heading m={59} pt={70}>
          PLANS THAT SUIT YOU BEST
        </Heading>
      </Box>
      <HStack
        align="center"
        justify="center"
        w="90%"
        h="50vh"
        m="auto"
        mt={20}
        p={200}
      >
        {data.map((e) => (
          <Box key={e.id}>
            <Box
              h="550px"
              align="center"
              boxShadow="md"
              rounded="md"
              bg="white"
            >
              <Box rounded="md">
                <Image w="100%" h="200px" rounded="md" src={e.img} alt="" />
              </Box>
              <Text
                p={4}
                fontSize="18px"
                fontFamily="DM Serif Text -700"
                fontWeight={700}
                textAlign="justify"
              >
                {e.title}
              </Text>
              <Text fontSize="xs">{e.post}</Text>
              <Text p={4} textAlign="justify" fontSize="md">
                {e.info}
              </Text>
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
                {e.button}
              </Button>
            </Box>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default Experts;
