import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductItem from "../ProductItem/ProductItem";

const ProductsSlider = (props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="productsSlider py-3">
      <Swiper
        spaceBetween={10}
        slidesPerView={props.items}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="CardSwipper !overflow-visible"
      >
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
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

export default ProductsSlider;
