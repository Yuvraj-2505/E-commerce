import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-3">
      <div className="container">
        <Swiper
          spaceBetween={10}
          loop={true} // ✅ infinite loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ auto-play every 3s
          modules={[Pagination, Autoplay]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/images/Banner/file_1767704630360_slider1.jpg"
                alt="Slide Banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/images/Banner/file_1734525014348_NewProject(7).jpg"
                alt="Slide Banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/images/Banner/file_1734524985581_NewProject(11).jpg"
                alt="Slide Banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/images/Banner/file_1734524971122_NewProject(8).jpg"
                alt="Slide Banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/images/Banner/slideBanner1.jpg"
                alt="Slide Banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/images/Banner/slideBanner2.jpg"
                alt="Slide Banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="/images/Banner/file_1734524878924_1721277298204_banner.jpg"
                alt="Slide Banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";

// const HomeSlider = () => {
//   return (
//     <div className="homeSlider py-3">
//       <div className="container">
//         <Swiper
//           spaceBetween={10}
//           navigation={true}
//           loop={true} // ✅ infinite loop
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           modules={[Navigation, Autoplay]}
//           className="sliderHome"
//         >
//           <SwiperSlide>
//             <div className="item rounded-[20px] overflow-hidden">
//               <img
//                 src="/images/Banner/file_1767704630360_slider1.jpg"
//                 alt="Slide Banner"
//                 className="w-full"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="item rounded-[20px] overflow-hidden">
//               <img
//                 src="/images/Banner/file_1734525014348_NewProject(7).jpg"
//                 alt="Slide Banner"
//                 className="w-full"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="item rounded-[20px] overflow-hidden">
//               <img
//                 src="/images/Banner/file_1734524985581_NewProject(11).jpg"
//                 alt="Slide Banner"
//                 className="w-full"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="item rounded-[20px] overflow-hidden">
//               <img
//                 src="/images/Banner/file_1734524971122_NewProject(8).jpg"
//                 alt="Slide Banner"
//                 className="w-full"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="item rounded-[20px] overflow-hidden">
//               <img
//                 src="/images/Banner/slideBanner1.jpg"
//                 alt="Slide Banner"
//                 className="w-full"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="item rounded-[20px] overflow-hidden">
//               <img
//                 src="/images/Banner/slideBanner2.jpg"
//                 alt="Slide Banner"
//                 className="w-full"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="item rounded-[20px] overflow-hidden">
//               <img
//                 src="/images/Banner/file_1734524878924_1721277298204_banner.jpg"
//                 alt="Slide Banner"
//                 className="w-full"
//               />
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default HomeSlider;
