import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Rating = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="">
            <h3>Bodrul Alam</h3>
            <h6>
              It was nice travelling with them. The restaurant was also amazing.
              Great experience
            </h6>
            <p>Waiting for another trip</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Rating;
