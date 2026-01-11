import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import BannerBox from "../BannerBox/BannerBox";

const AdsBannerSlider = (props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="py-5 w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={props.items}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="mySwiper !overflow-visible"
      >
        <SwiperSlide>
            <BannerBox img={'/images/Ads-Banner/1741669037986_banner2.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/images/Ads-Banner/lays_banner5.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/images/Ads-Banner/iphone_banner6.webp'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/images/Ads-Banner/smartphone_banner1.webp'}  link={'/'}/>
        </SwiperSlide>
        <div ref={prevRef} className="button-prev-custom ">
          <MdKeyboardArrowLeft />
        </div>
        <div ref={nextRef} className="button-next-custom ">
          <MdKeyboardArrowRight />
        </div>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;


