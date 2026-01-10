import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-3">
      <div className="container relative !overflow-visible">
        <Swiper
          spaceBetween={10}
          slidesPerView={7}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper !overflow-visible"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm flex text-center flex justify-center flex-col items-center">
                <img
                  src="/images/Cat-Banner/1767337493085_20457.png"
                  className="w-[60px]"
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
                  className="w-[60px]"
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
                  className="w-[60px]"
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
                  className="w-[60px]"
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
                  className="w-[60px]"
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
                  className="w-[60px]"
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
                  className="w-[60px]"
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
                  className="w-[60px]"
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
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] mt-3">Faishon</h3>
              </div>
            </Link>
          </SwiperSlide>

          <div className="button-prev-custom swiper-button-prev">
            <IoIosArrowDropleft size={22}/>
          </div>
          <div className="button-next-custom swiper-button-next">
            <IoIosArrowDropright size={22}/>
          </div>
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
