import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductPics() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2  w-[1200px] h-[600px]"
      >
        <SwiperSlide>
          <img src="https://i2.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-1.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-2.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-3.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-4.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-[650px] w-96"
      >
        <SwiperSlide>
          <img src="https://i2.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-1.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-2.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-3.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/01/Aspida-4.jpg?fit=2048%2C2048&ssl=1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductPics;
