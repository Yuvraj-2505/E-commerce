import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HomeCatSlider = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <div className="homeCatSlider py-3">
      <div className="container relative !overflow-visible">
        <Swiper
          spaceBetween={10}
          slidesPerView={7}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="mySwiper !overflow-visible"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>
          

          <div 
          ref={prevRef}
          className="button-prev-custom ">
            <MdKeyboardArrowLeft />
          </div>
          <div 
           ref={nextRef}
          className="button-next-custom ">
            <MdKeyboardArrowRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
