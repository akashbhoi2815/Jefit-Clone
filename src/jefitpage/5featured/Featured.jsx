import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// import 'swiper/swiper.min.css'
import "./feature.css";
import slideData from "./data";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Heading,Text } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Featured() {
  return (
    <Box
      p="100px"
      alignSelf="center"
      textAlign="center"
     
      h="600px"
      borderRadius="10px"
    >
      <Box>
        <Heading
         variant={"solid"}
          
        >
          JEFIT HAS BEEN FEATURED BY
        </Heading>
      </Box>

      <div style={{ width: "70%", margin: " 50px auto" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={6}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          className="mySwiper"
          loop={true}
        >
          {slideData.map((e) => (
            <SwiperSlide key={e.id}>
              <Box h="auto" align="center">
                <Box h={20} p={3}>
                  <img src={e.img} alt="" />
                </Box>
                <Text fontSize='20px' fontFamily="DM Serif Text -700" fontWeight={700}>{e.title}</Text>
                <br />
                <Text fontSize='md'>{e.info}</Text>
                <br />
                <Text fontSize='18px' fontFamily="DM Serif Text -400" fontWeight={400}>{e.name}</Text>
                <Text fontSize='m'>{e.type}</Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
}

// {/* <Heading></Heading> */}
