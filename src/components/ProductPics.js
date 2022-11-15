import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductPics({ product }) {
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
        className="mySwiper2  w-[500px] h-[550px] overflow-hidden cursor-pointer"
      >
        <SwiperSlide>
          <img src={product.image1} />
        </SwiperSlide>

        {product.image2 ? (
          <SwiperSlide>
            <img src={product.image2} />
          </SwiperSlide>
        ) : null}

        {product.image3 ? (
          <SwiperSlide>
            <img src={product.image3} />
          </SwiperSlide>
        ) : null}

        {product.image4 ? (
          <SwiperSlide>
            <img src={product.image4} />
          </SwiperSlide>
        ) : null}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-96 overflow-hidden cursor-pointer "
      >
        <SwiperSlide>
          <img
            src={product.image1}
            className="hover:opacity-50 hover:transition-all hover:duration-500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={product.image2}
            className="hover:opacity-50 hover:transition-all hover:duration-500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={product.image3}
            className="hover:opacity-50 hover:transition-all hover:duration-500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={product.image4}
            className="hover:opacity-50 hover:transition-all hover:duration-500"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductPics;
