import React from "react";
import { TestimonialCard } from "../Card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const TestimonialSlider = ({ data }) => {
  return (
    <>
      <div className="our-customers-say-slider owl-carousel">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: "#swiper-forward",
            prevEl: "#swiper-back",
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {/* item slider */}
          {data?.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <TestimonialCard
                  name={card.name}
                  title={card.title}
                  content={card.content}
                  company={card.company}
                  
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="owl-nav">
          <button
            type="button"
            role="presentation"
            className="owl-prev"
            id="swiper-back"
          >
            <Icon icon="material-symbols:arrow-back-ios-new" />
          </button>
          <button
            type="button"
            role="presentation"
            className="owl-next"
            id="swiper-forward"
          >
            <Icon icon="material-symbols:arrow-forward-ios" />
          </button>
        </div>
        {/* item slider */}
      </div>
      <div className="avatar-flex">
        {data?.map((card, i) => {
          return (
            <button className="btn owl-dot" key={i}>
              <LazyLoadImage
                src={card.image}
                width="35"
                height="35"
                alt={card.name}
              />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TestimonialSlider;
