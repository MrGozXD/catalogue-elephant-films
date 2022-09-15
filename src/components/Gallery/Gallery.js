/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Gallery.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Gallery(data) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_5.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_6.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_7.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_8.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_9.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_10.jpg"} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_5.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_6.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_7.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_8.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_9.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://e-nautia.com/j.sayada/disk/CATALOGUE/"+data+"/"+data+"_10.jpg"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
