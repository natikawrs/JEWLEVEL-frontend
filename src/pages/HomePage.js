import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination } from "swiper";
import logo from "../jewlevel2.png";
import logo2 from "../jewlevel1.png";
import earring from "../images/earring.png";
import necklace from "../images/necklace.png";
import rings from "../images/rings.png";
import wristwear from "../images/wristwear.png";
import ribbon from "../images/ribbon.webp";
import newarrival from "../images/newarrival.png";
import john from "../images/john.jpeg";
import blog1 from "../images/blog1.webp";
import blog2 from "../images/blog2.webp";
import blog3 from "../images/blog3.webp";
import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.jpeg";
import cover3 from "../images/cover3.jpg";

function HomePage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[600px] w-[1700px] overflow-hidden">
            <img
              src={cover1}
              className="object-cover top-[300px] w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-[1700px] overflow-hidden">
            <img
              src={cover2}
              className=" object-cover top-[300px] w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-[1700px] overflow-hidden">
            <img src={cover3} className=" object-cover w-full h-full" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-around mt-40  gap-10 px-16">
        <div className="w-64 h-60 overflow-hidden">
          <img
            className="w-100 h-100 hover:scale-125 transition-all  duration-1000 cursor-pointer"
            src={earring}
          />
        </div>
        <div className="w-64 h-60 overflow-hidden">
          <img
            className="w-100 h-100 hover:scale-125 transition-all  duration-1000 cursor-pointer"
            src={necklace}
          />
        </div>
        <div className="w-64 h-60 overflow-hidden">
          <img
            className="w-100 h-100 hover:scale-125 transition-all  duration-1000 cursor-pointer"
            src={rings}
          />
        </div>
        <div className="w-64 h-60 overflow-hidden">
          <img
            className="w-100 h-100 hover:scale-125 transition-all  duration-1000 cursor-pointer"
            src={wristwear}
          />
        </div>
      </div>

      <p className="mt-20 text-center text-[#A7C7D7] font-medium text-2xl">
        NEW ARRIVAL
      </p>
      <img className="mx-auto my-10" src={ribbon} />
      <div className="flex gap-10 justify-center">
        <p className="text-[#A7C7D7]">NEW ARRIVAL</p>
        <p className="text-[#A7C7D7]">BEST SELLER</p>
        <p className="text-[#A7C7D7]">GIFT ITEMS</p>
      </div>

      <div className="my-20 px-16">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-64 h-60" src={newarrival} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-64 h-60" src={newarrival} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-64 h-60" src={newarrival} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-64 h-60" src={newarrival} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-64 h-60" src={newarrival} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-64 h-60" src={newarrival} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-64 h-60" src={newarrival} />
          </SwiperSlide>
        </Swiper>
      </div>

      <p className="mt-20 text-center text-[#A7C7D7] font-medium text-2xl">
        FROM OUR BELOVED CUSTOMER
      </p>
      <img className="mx-auto my-10" src={ribbon} />
      <p className=" text-[#A7C7D7] text-center px-40 font-normal">
        Great service! I was searching for a anniversary gift to my girlfriend
        and I came across JEWLEVEL's cute website page. They have an enchanting
        necklace that's super cute so I bought it for my girlfriend and she
        loved it! 10/10 to Dear Diary and the team for being helpful with my
        questions, will buy again next time
      </p>
      <div className="flex mt-10 justify-center gap-5">
        <img className="rounded-full w-14 " src={john} />
        <p className="text-[#A7C7D7] my-auto border-t-2 pt-2">John DH</p>
      </div>

      <p className="mt-20 text-center text-[#A7C7D7] font-medium text-2xl">
        JEWLEVEL BLOG
      </p>
      <img className="mx-auto mt-10" src={ribbon} />
      <div className="flex my-20  px-16 gap-5">
        <div className="w-96 h-[450px] overflow-hidden ">
          <img
            className="w-96 h-[450px] hover:scale-125 transition-all  duration-1000 cursor-pointer"
            src={blog1}
          />
        </div>
        <div className="w-96 h-[450px] overflow-hidden">
          <img
            className="w-96 h-[450px] hover:scale-125 transition-all  duration-1000 cursor-pointer"
            src={blog2}
          />
        </div>
        <div className="w-96 h-[450px] overflow-hidden">
          <img
            className="w-96 h-[450px] hover:scale-125 transition-all  duration-1000 cursor-pointer"
            src={blog3}
          />
        </div>
      </div>
      <img className="mx-auto mt-20" src={ribbon} />
      <div className=" flex justify-center gap-10 mb-20 mt-10 ">
        <p className="text-[#A7C7D7] font-thin text-2xl my-auto border-r-2 pr-9 py-5">
          WORLDWIDE SHIPPING
        </p>
        <p className="text-[#A7C7D7] font-thin text-2xl my-auto border-r-2 pr-9 py-5">
          30 DAYS FREE REPAIR
        </p>
        <p className="text-[#A7C7D7] font-thin text-2xl my-auto py-5">
          GIFTING SERVICE
        </p>
      </div>
    </>
  );
}

export default HomePage;
