import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const HeroSlider = ({ data }) => {
  return (
    <>
      <div className="sliding-image">
        <LazyLoadImage alt="mobile" height="600" src="images/banner-set.png" width="289" className="main-image" />
        <div className="sliding-image-owl-container">
          <div className="img-slider-owl owl-carousel">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
            >
              {data?.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <LazyLoadImage alt={slide.name} height="579" src={slide.image} width="272" />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
