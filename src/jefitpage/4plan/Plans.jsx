import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import data from "./data";

const Plans = () => {
  return (
    <Box
      h={900}
      display="block"
      bgImage="url('https://www.jefit.com/wp/wp-content/uploads/2021/11/caucasian-man-practicing-weightlifting-gym-caucasian-male-sportive-model-training-with-barbell-looks-confident-strong-body-building-healthy-lifestyle-movement-activity-action-concept-4-scaled-1.jpg')"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      size="100%"
    >
      <Box
        align="center"
        color="white"
        fontFamily="Montserrat - 700"
        fontSize="30px"
        fontWeight="700"
        fontStyle="normal"
        h={202}
        display="block"
      >
        <Heading  m={10}  pt={120}>
          PLANS THAT SUIT YOU BEST
        </Heading>
      </Box>

      <Flex justify="center" align="center" gap={5}>
        {data.map((el) => (
          <Box  bgColor="white" p="25px" borderRadius={10}>
            <Box textAlign="center">
              <Text>{el.type}</Text>
              <Heading>{el.cost}</Heading>
              <Text>{el.duration}</Text>
            </Box>
            <br />
            <Box>
              {el.info.map((e) => (
                <Text>{e}</Text>
              ))}{" "}
            </Box>
            <br />
            <Box align="center">
              <Button>{el.button}</Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Plans;
