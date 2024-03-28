import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import FormCard from "../Card/FormCard";

const FormSlider = ({ data }) => {
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
                                <FormCard
                                    name={card.name}
                                    title={card.title}
                                    content={card.content}
                                    company={card.company}

                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* item slider */}
            </div>
        </>
    );
};

export default FormSlider;
