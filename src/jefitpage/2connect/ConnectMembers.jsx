import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./MemberStyle.css";
import slideData from './MemberData'

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Button, Heading } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);



export default function ConnectMembers() {
  return (
    <Box
    className="main"
      p="100px"
      alignSelf="center"
      textAlign="center"
      bgColor="#f2f6ff"
      h="500px"
      borderRadius="10px"
    >
      <Box>
        <Heading
          variant={"solid"}
        >
          CONNECT WITH OVER 10 MILLION JEFIT MEMBERS
        </Heading>
        <br />
        
        <Heading
          variant={"smooth"}
        >
          As the most active workout community, we invite you and your friends
          to join us and support each other.
        </Heading>
      </Box>

      <div style={{ width: "70%", margin: " 50px auto" }}>
        <Swiper
          slidesPerView={7}
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
              <img src={e.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button bgColor="#00a9ff" color="white" borderRadius="20px" w="140px">
        Join Now
      </Button>
    </Box>
  );
}
