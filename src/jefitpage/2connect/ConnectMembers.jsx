import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// import 'swiper/swiper.min.css'
import "./MemberStyle.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Button, Heading } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const slideData = [
  {
    id: 1,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/10members-pgstlr39r1swpbztzk0dz9mbtub0w6pu9q8dpo30s0.png",
  },
  {
    id: 2,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/15members-pgstnqj06gip7p42eew18rlcz4ix56lfvjta6p53n4.png",
  },
  {
    id: 3,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/14members-pgstncffbxzedjojoqsmpd5g2cgexq1gtm0zzjq08g.png",
  },
  {
    id: 4,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/1members-pgstmm3y0kzdcgqryff2rjsjfk24y74zdzrejst12o.png",
  },
  {
    id: 5,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/3members-pgstlc1upp8bjklofdicvdeybod5h124vnsm18pbjk.png",
  },
  {
    id: 6,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/20members-pgstqsi4e2p8y2obk8fduhuah7gv5rq1ao53c2m1f4.png",
  },
  {
    id: 7,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/7members-pgstqeejjk5y3x8sukbzb3edkfecyb628qct4x6y0g.png",
  },
  {
    id: 8,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/2members-pgstpn581d4mr8ce9qjsssa0c94pr35ugzfq7wbd0w.png",
  },
  {
    id: 9,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/16members-pgstp9zhdomm8oviekv0tvlk0uxkrbplr6axi0uvg0.png",
  },
  {
    id: 10,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/18members-pgstovvwj63bejfzowrmah5n42v2jv5mp8inavfs1c.png",
  },
  {
    id: 11,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/17members-pgsto3oqu50pq8ky9kkt7o9taiq24y1olcy2wkll80.png",
  },
  {
    id: 12,
    url: "https://cdn.jefit.com/wp/wp-content/uploads/elementor/thumbs/4members-pgstjrnjbn346yvlkp4qprnaok34n6u8nwnh8n0xww.png",
  },
];

export default function ConnectMembers() {
  return (
    <Box
      p="100px"
      alignSelf="center"
      textAlign="center"
      bgColor="#f2f6ff"
      h="500px"
      borderRadius="10px"
    >
      <Box>
        <Heading
          fontWeight="700"
          fontStyle="normal"
          fontFamily="Montserrat - 700"
          fontSize="36px"
          fon
        >
          CONNECT WITH OVER 10 MILLION JEFIT MEMBERS
        </Heading>
        <br />
        
        <Heading
          fontWeight="400"
          fontStyle="normal"
          fontFamily="DM Sans - 400"
          fontSize="22px"
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
