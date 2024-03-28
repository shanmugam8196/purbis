import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const AppSlider = ({ data}) => {
  return (
    <>
      <div className="mobile-app-slider">
        <div className="mobile-app-slider-phone">
          <LazyLoadImage alt="mobile" height="600" src="images/banner-set.png" width="289" className="main-image" />
        </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 1500,
              }}
              centeredSlides
              loop={true}
            >
            {data?.map((slide, index) => {return(
              <SwiperSlide key={index}>
                <LazyLoadImage alt={slide.name} height="600" src={slide.img} width="272" />
              </SwiperSlide>
              )})}
            </Swiper>
      </div>
    </>
  );
};

export default AppSlider;
